import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BLOG_POSTS, formatDate, getPost } from "../../lib/blog";
import { BRAND, LINKS } from "../../lib/constants";
import NotFound from "../NotFound";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const next = BLOG_POSTS[idx - 1];
  const prev = BLOG_POSTS[idx + 1];

  return (
    <>
      <Helmet>
        <title>{post.title} — Government Contracting Information</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://${BRAND.domain}/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-14 lg:px-8 lg:py-20">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition mb-8">
            <ArrowLeft size={15} /> Back to all articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-5">
            <span className="text-gov-gold font-bold uppercase tracking-wider bg-gov-gold/10 border border-gov-gold/20 px-2.5 py-1 rounded">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <article className="prose-gov">
            {post.body.map((paragraph, i) => {
              if (paragraph.startsWith("**")) {
                const [heading, ...rest] = paragraph.split("\n\n");
                const headingText = heading.replace(/\*\*/g, "");
                const restText = rest.join(" ");
                return (
                  <div key={i}>
                    <h2 className="font-display text-xl font-bold text-gov-navy mt-10 mb-3">{headingText}</h2>
                    {restText && (
                      <p
                        className="text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: restText.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
                      />
                    )}
                  </div>
                );
              }
              return (
                <p
                  key={i}
                  className="text-slate-700 leading-relaxed mt-5 text-[16px]"
                  dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
                />
              );
            })}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-xs font-medium">
                  <Tag size={11} /> {t}
                </span>
              ))}
            </div>
          )}

          {/* Prev / next */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 border-t border-slate-100 pt-8">
            {prev ? (
              <Link to={`/blog/${prev.slug}`} className="group rounded-2xl border border-slate-200 p-5 hover:border-gov-blue/30 transition">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Previous Article</div>
                <div className="text-sm font-semibold text-gov-navy group-hover:text-gov-blue transition leading-snug">{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/blog/${next.slug}`} className="group rounded-2xl border border-slate-200 p-5 hover:border-gov-blue/30 transition text-right">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Next Article</div>
                <div className="text-sm font-semibold text-gov-navy group-hover:text-gov-blue transition leading-snug">{next.title}</div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-gov-navy mb-8">More in {post.category}</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                  <Card className="h-full p-5 group-hover:border-gov-blue/30 transition">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gov-blue mb-2">{p.category}</div>
                    <div className="font-semibold text-gov-navy text-sm group-hover:text-gov-blue transition leading-snug">{p.title}</div>
                    <div className="mt-2 text-xs text-slate-500">{p.readTime}</div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <Section
        title="Want expert help with this?"
        kicker="Talk to Us — Free"
        subtitle="If any of this feels overwhelming, you don't have to figure it out alone. Book a free consultation and we'll map your path forward."
        center
        dark
      >
        <div className="flex justify-center">
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" variant="secondary">
            Book a Free Consultation <ArrowRight size={16} className="ml-2" />
          </LinkButton>
        </div>
      </Section>
    </>
  );
}