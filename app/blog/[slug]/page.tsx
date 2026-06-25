import Breadcrumb from "@/app/components/blog/breadcrumb";
import { getArticleWithQuillBySlugRequest } from "@/app/request/article/getArticleWithQuillRequest";
import { formatDate } from "@/app/utils/formatDate";
import { imageUrlClient } from "@/app/utils/imageUrlClient";
import { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface DetailBlogProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DetailBlogProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await getArticleWithQuillBySlugRequest({ slug });
    const post = result.data;

    if (!post) return { title: "Article Not Found | Edumatrix Indonesia" };

    const cleanDesc =
      post.description?.slice(0, 160) ||
      "Artikel bimbingan belajar terbaik dari Edumatrix Indonesia.";
    const articleImage = `${imageUrlClient}/article-images/${post.mainImage}`;
    const pageUrl = `https://bimbeledumatrix.com/blog/${slug}`;

    return {
      title: `${post.title} | Edumatrix Indonesia`,
      description: cleanDesc,
      keywords: ["artikel", post.tag || "pendidikan", "les privat", "osn"],
      openGraph: {
        title: post.title,
        description: cleanDesc,
        images: [
          { url: articleImage, width: 1200, height: 630, alt: post.title },
        ],
        url: pageUrl,
        type: "article",
        siteName: "Edumatrix Indonesia",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: cleanDesc,
        images: [articleImage],
      },
      alternates: {
        canonical: pageUrl,
      },
    };
  } catch (error) {
    console.error("Metadata Generation Error:", error);
    return { title: "Blog | Edumatrix Indonesia" };
  }
}

// 2. MAIN COMPONENT (Server Component - High Performance)
export default async function DetailBlogArticleWithQuill({
  params,
}: DetailBlogProps) {
  const { slug } = await params;

  let post = null;
  try {
    const result = await getArticleWithQuillBySlugRequest({ slug });
    post = result.data;
  } catch (error) {
    console.error("Error loading post:", error);
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-red-500 font-semibold text-lg">Article not found</p>
      </div>
    );
  }

  // Google SEO Best Practice: Inject JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `${imageUrlClient}/articlequill-images/${post.mainImage}`,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: post.authorName || "Edumatrix Indonesia",
    },
    description: post.description?.slice(0, 160),
  };

  return (
    <article className="bg-[#F9FAFB] flex flex-col items-center min-h-screen ">
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-310 w-full my-10 px-4">
        <header className="mb-6">
          <Breadcrumb selectedTag={post.tag} />

          <p className="text-[#F59E0B] text-xs md:text-base font-semibold font-title_blog mt-4 tracking-wide">
            Edumatrix Education
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-[#111827] font-title_blog mt-2 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center mt-5">
            <Image
              src="/images/logo_edm.webp"
              className="rounded-full"
              alt="Logo Resmi Edumatrix Indonesia"
              width={35}
              height={35}
              priority
            />
            <div className="ml-3">
              <p className="font-bold text-xs md:text-sm text-[#111827] font-title_blog">
                {post.authorName}
              </p>
              <time
                className="text-gray-500 text-[10px] block"
                dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
            </div>
          </div>
        </header>

        {/* Gambar Utama Utama (Optimized LCP Element) */}
        <div className="w-full my-6 overflow-hidden rounded-2xl shadow-sm">
          <Image
            src={`${imageUrlClient}/articlequill-images/${post.mainImage}`}
            alt={`Visual artikel mengenai ${post.title}`}
            width={1000}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Ringkasan/Deskripsi Pendek */}
        <section className="prose max-w-none leading-relaxed mb-8 font-desc text-gray-700 text-lg border-l-4 border-gray-300 pl-4 italic">
          <Markdown>{post.description}</Markdown>
        </section>

        {/* Isi Utama Artikel (Rich Text Editor Parser) */}
        <section className="prose max-w-none text-justify text-[#6B7280]">
          <Markdown
            rehypePlugins={[rehypeRaw]} // Mengizinkan tag HTML murni dari Quill Editor dipetakan dengan aman
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl md:text-2xl font-bold font-title_blog text-gray-800 mt-10 mb-4 pb-2 border-b border-gray-200">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg md:text-xl font-semibold font-title_blog text-gray-700 mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-sm md:text-base text-gray-600 font-desc leading-relaxed mb-5">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-600 font-desc">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-600 font-desc">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 font-desc leading-relaxed">
                  {children}
                </li>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F59E0B] hover:text-[#D97706] underline font-medium transition-colors">
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#F59E0B] pl-4 italic text-gray-500 my-6 bg-amber-50/50 py-3 pr-3 rounded-r-lg font-desc">
                  {children}
                </blockquote>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-gray-900">{children}</strong>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt || "Gambar pendukung artikel Edumatrix"}
                  className="rounded-xl my-6 max-w-full h-auto mx-auto shadow-sm"
                  loading="lazy"
                />
              ),
            }}>
            {post.descriptionQuill}
          </Markdown>
        </section>
      </div>
    </article>
  );
}
