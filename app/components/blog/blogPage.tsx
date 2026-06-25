"use client"; // 👈 Wajib ditambahkan di baris pertama

import { getAllIsDeletedArticleQuill } from "@/app/request/article/getAllIsDeletedArticleQuill";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import BlogsCard, { BlogPostItem } from "./blogsCard";
import IntroPostBlog from "./introPostBlog";
import SearchBlog from "./searchBlog";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = async (
    categoryId: string | number | null = null,
    searchQuery: string = "",
  ) => {
    setLoading(true);
    try {
      const result = await getAllIsDeletedArticleQuill(categoryId, searchQuery);
      setPosts(result.data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCategoryChange = (categoryId: string | number | null) => {
    fetchPosts(categoryId);
  };

  const handleSearch = (searchQuery: string) => {
    fetchPosts(null, searchQuery);
  };

  return (
    <div className="bg-[#04397d]">
      <SearchBlog selectedTag={handleCategoryChange} onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <PulseLoader color="#ffffff" size={10} />
        </div>
      ) : posts.length > 0 ? (
        <IntroPostBlog post={posts[0]} />
      ) : (
        <div className="flex flex-col justify-center items-center h-[60vh] text-white space-y-4">
          <Image
            loading="eager"
            src="/images/no-article-icon-blog-page.webp"
            alt="Logo atau simbol yang mewakili Edumatrix Indonesia, yang mencerminkan komitmen perusahaan dalam memberikan pendidikan berkualitas dan informasi terkini untuk para siswa dan orang tua."
            className="w-40 h-auto object-contain"
            width={100}
            height={100}
          />
          <p className="text-lg font-semibold">No posts available</p>
        </div>
      )}
      {posts.length > 0 && <BlogsCard posts={posts} />}
    </div>
  );
};

export default BlogPage;
