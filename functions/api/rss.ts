// RSS feed proxy — fetches any RSS/Atom feed server-side and returns JSON.
// Deployed as a Cloudflare Pages Function at /api/rss

const FEED_PATTERN = /<(item|entry)[\s\S]*?<\/(item|entry)>/g;

function decodeEntities(str) {
  if (!str) return "";
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

function extractTag(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = block.match(re);
  return m ? decodeEntities(m[1]) : "";
}

function extractLink(block) {
  // Atom <link href="..." /> or RSS <link>...</link>
  const atom = block.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i);
  if (atom) return atom[1];
  return extractTag(block, "link");
}

function extractDate(block) {
  const date =
    extractTag(block, "pubDate") ||
    extractTag(block, "published") ||
    extractTag(block, "updated") ||
    extractTag(block, "dc:date");
  return date || "";
}

export async function onRequestGet(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const url = new URL(context.request.url);
  const feedUrl = url.searchParams.get("url");

  if (!feedUrl) {
    return new Response(JSON.stringify({ error: "Missing ?url= parameter" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  // Only allow http(s) URLs
  if (!/^https?:\/\//i.test(feedUrl)) {
    return new Response(JSON.stringify({ error: "Invalid feed URL" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  try {
    const res = await fetch(feedUrl, {
      headers: {
        "User-Agent": "GovernmentContractingInformation/1.0 (RSS reader)",
        Accept: "application/rss+xml, application/xml, application/atom+xml, text/xml, */*",
      },
      redirect: "follow",
    });

    if (!res.ok) {
      throw new Error(`Feed fetch failed (${res.status})`);
    }

    const xml = await res.text();

    const items = [];
    const blocks = xml.match(FEED_PATTERN) || [];

    for (const block of blocks.slice(0, 25)) {
      const title = extractTag(block, "title");
      const link = extractLink(block);
      const pubDate = extractDate(block);
      const description = extractTag(block, "description") || extractTag(block, "summary") || extractTag(block, "content");
      if (title || link) {
        items.push({
          title: title || link,
          link,
          pubDate,
          description: description.slice(0, 300),
        });
      }
    }

    // Channel-level metadata
    const channelTitle = extractTag(xml.replace(FEED_PATTERN, ""), "title");

    return new Response(
      JSON.stringify({ url: feedUrl, channelTitle, items }),
      { headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message ?? "Failed to fetch feed" }),
      { status: 502, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}