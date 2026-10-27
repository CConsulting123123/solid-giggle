import { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight, Calendar, Clock, Rss, Tag, Search as SearchIcon,
  ChevronRight, BookOpen, ExternalLink, Newspaper,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND } from "../../lib/constants";
import { BLOG_POSTS, BLOG_CATEGORIES, formatDate, getPost, postsByCategory } from "../../lib/blog";
import { cn } from "../../components/cn";

/* ───────────────────────────────────────────── */
/*  SHARED PIECES                                 */
/* ───────────────────────────────────────────── */

function PostMeta({ post, dark }: { post: (typeof BLOG_POSTS)[number]; dark?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs", dark ? "text-slate-400" : "text-slate-500")}>
      <span className="inline-flex items-center gap-1">
        <Calendar size={12} /> {formatDate(post.date)}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock size={12} /> {post.readTime}
      </span>
      <span className="inline-flex items-center gap-1">
        <Tag size={12} /> {post.category}
      </span>
    </div>
  );
}

function PostCard({ post, featured }: { post: (typeof BLOG_POSTS)[number]; featured?: boolean }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full flex flex-col p-6 transition-all group-hover:border-gov-blue/30 group-hover:shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gov-blue bg-gov-blue/10 px-2 py-1 rounded">
            {post.category}
          </span>
          {featured && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-gov-crimson bg-gov-crimson/10 px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-display text-lg font-bold text-gov-navy group-hover:text-gov-blue transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <PostMeta post={post} />
          <ArrowRight size={16} className="text-slate-300 group-hover:text-gov-blue group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      </Card>
    </Link>
  );
}

function renderBody(body: string[]) {
  return body.map((paragraph, i) => {
    if (paragraph.startsWith("**")) {
      const [heading, ...rest] = paragraph.split("\n\n");
      const headingText = heading.replace(/\*\*/g, "");
      const restText = rest.join(" ");
      return (
        <div key={i}>
          <h3 className="font-display text-xl font-bold text-gov-navy mt-8 mb-3">{headingText}</h3>
          {restText && (
            <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: restText.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
          )}
        </div>
      );
    }
    return (
      <p
        key={i}
        className="text-slate-700 leading-relaxed mt-4"
        dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
      />
    );
  });
}

/* ───────────────────────────────────────────── */
/*  BLOG LIST PAGE                                */
/* ───────────────────────────────────────────── */

export default function Blog() {
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const location = useLocation();

  // External RSS feeds (industry news) — fetched through /api/rss proxy
  const [rssItems, setRssItems] = useState<{ title: string; link: string; pubDate?: string }[]>([]);
  const [rssUrl, setRssUrl] = useState("https://sam.gov/content/sam/en/about-sam/newsroom.rss");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) setCategory(cat);
  }, [location.search]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = new URL("/api/rss", window.location.origin);
        url.searchParams.set("url", rssUrl);
        const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && data?.items) setRssItems(data.items.slice(0, 8));
      } catch {
        // silently ignore — news panel is optional
      }
    })();
    return () => { cancelled = true; };
  }, [rssUrl]);

  const filtered = useMemo(() => {
    let posts = category ? postsByCategory(category) : BLOG_POSTS;
    if (query.trim()) {
      const q = query.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return posts;
  }, [category, query]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <Helmet>
        <title>Blog &amp; Industry News — Government Contracting Information</title>
        <meta name="description" content="Guides and analysis on government contracting for small businesses — SAM.gov, SBA certifications, GSA Schedules, proposal writing, and capture management. Updated with federal contracting industry news." />
        <link rel="canonical" href={`https://${BRAND.domain}/blog`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 mb-5">
              <Rss size={13} className="text-gov-gold" />
              RSS feed style — updated continuously
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Government Contracting Blog
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Practical guides, market intelligence and industry news for small businesses
              competing in the federal marketplace. No fluff — just what you need to know to win.
            </p>
          </div>
        </div>
      </section>

      {/* Search + categories */}
      <section className="bg-white border-b border-slate-100 sticky top-[60px] z-30">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory(null)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold border transition",
                !category ? "bg-gov-navy text-white border-gov-navy" : "bg-white text-slate-600 border-slate-200 hover:border-gov-blue"
              )}
            >
              All Posts
            </button>
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(category === c ? null : c)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold border transition",
                  category === c ? "bg-gov-navy text-white border-gov-navy" : "bg-white text-slate-600 border-slate-200 hover:border-gov-blue"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <SearchIcon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-sm focus:border-gov-blue focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen size={36} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">No posts match your search. Try a different term or category.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((p) => (
                  <PostCard key={p.slug} post={p} featured />
                ))}
              </div>
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                  {rest.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Industry News via RSS */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Live Industry News</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">
                Federal Contracting Newsroom
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-xl">
                Pulled live via RSS from official federal sources — updates automatically whenever new items are published.
              </p>
            </div>
            <select
              value={rssUrl}
              onChange={(e) => setRssUrl(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:border-gov-blue focus:outline-none"
            >
              <option value="https://sam.gov/content/sam/en/about-sam/newsroom.rss">SAM.gov Newsroom</option>
              <option value="https://www.sba.gov/rss.xml">SBA Updates</option>
              <option value="https://www.gsa.gov/rss.xml">GSA Updates</option>
            </select>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {rssItems.length === 0 ? (
              <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                <Newspaper size={24} className="mx-auto text-slate-300 mb-3" />
                Live news feed will appear here once deployed (requires the /api/rss endpoint).
              </div>
            ) : (
              rssItems.map((item, i) => (
                <a
                  key={`${item.link}-${i}`}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-gov-blue/30 hover:shadow-md transition-all"
                >
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-gov-blue mt-1 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <div className="font-semibold text-gov-navy text-sm group-hover:text-gov-blue transition-colors leading-snug">
                      {item.title}
                    </div>
                    {item.pubDate && (
                      <div className="text-xs text-slate-400 mt-1.5">
                        {new Date(item.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </div>
                    )}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section
        title="Have a specific question?"
        kicker="Free Support"
        subtitle="Every article here is free. If you'd rather just talk to a person about your situation, book a free consultation — no pitch, no obligation."
        center
        dark
      >
        <div className="flex justify-center">
          <LinkButton href="/contact" size="lg" variant="secondary">
            Get Free Help <ArrowRight size={16} className="ml-2" />
          </LinkButton>
        </div>
      </Section>
    </>
  );
}