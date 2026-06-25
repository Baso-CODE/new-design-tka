import { Metadata } from "next";
import BlogPage from "../components/blog/blogPage";

// Konfigurasi SEO menggunakan Metadata API Next.js App Router
export const metadata: Metadata = {
  title: "Blog | Edumatrix Indonesia",
  description:
    "Baca artikel menarik tentang pendidikan, tips belajar, dan informasi lainnya di blog Edumatrix Indonesia.",
  keywords: ["blog", "artikel", "pendidikan", "Edumatrix", "tips belajar"],
  openGraph: {
    title: "Blog | Edumatrix Indonesia",
    description:
      "Baca artikel menarik tentang pendidikan, tips belajar, dan informasi lainnya di blog Edumatrix Indonesia.",
    images: [{ url: "/images/image-hero-blog-edm.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Edumatrix Indonesia",
    description:
      "Baca artikel menarik tentang pendidikan, tips belajar, dan informasi lainnya di blog Edumatrix Indonesia.",
    images: ["/images/image-hero-blog-edm.webp"],
  },
  alternates: {
    canonical: "https://bimbeledumatrix.com/blog",
  },
};

const Blog = () => {
  return <BlogPage />;
};

export default Blog;
