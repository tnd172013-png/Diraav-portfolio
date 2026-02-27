import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import JournalPostContent from "@/components/journal/JournalPostContent";
import Contact from "@/components/Contact";
import { getPostBySlug, getAllSlugs } from "@/data/journal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Diraav" };

  return {
    title: `${post.title} | Diraav`,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <JournalPostContent post={post} />
        <Contact />
      </main>
    </>
  );
}
