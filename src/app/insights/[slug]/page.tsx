import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";
import ArticleView from "./ArticleView";

const BASE = "https://www.oriconsultoria.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${BASE}/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Origami Consulting Group`,
      description: post.description,
      url,
      siteName: "Origami Consulting Group",
      locale: "es_EC",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "es-EC",
            author: { "@type": "Organization", name: "Origami Consulting Group" },
            publisher: {
              "@type": "Organization",
              name: "Origami Consulting Group",
              logo: {
                "@type": "ImageObject",
                url: `${BASE}/logotipo-origami-horizontal.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE}/insights/${post.slug}`,
            },
          }),
        }}
      />
      <ArticleView post={post} />
    </>
  );
}
