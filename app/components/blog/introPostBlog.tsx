import { formatDate } from "@/app/utils/formatDate";
import { imageUrlClient } from "@/app/utils/imageUrlClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface BlogPost {
  slug: string;
  mainImage: string;
  tag?: string; // 👈 Ubah menjadi opsional dengan tanda tanya (?)
  title: string;
  description: string;
  authorName: string;
  publishDate: string;
}

// Interface untuk Props Komponen
interface IntroPostBlogProps {
  post: BlogPost;
}

const IntroPostBlog: React.FC<IntroPostBlogProps> = ({ post }) => {
  const navigate = useRouter();

  return (
    <div
      className="grid grid-cols-1 cursor-pointer md:grid-cols-2 mt-10 px-2 md:px-6 lg:px-32 gap-8"
      onClick={() => navigate.push("detail-blog/" + post.slug)}>
      <Image
        loading="lazy"
        src={`${imageUrlClient}/articlequill-images/${post.mainImage}`}
        className="rounded-2xl object-cover w-full h-full"
        width={600}
        height={600}
        alt={`Gambar utama artikel dengan tag "${post.tag || ""}" berjudul "${post.title}", membahas topik pendidikan berkualitas dan les privat terbaik dari Edumatrix Indonesia untuk siswa yang ingin mencapai prestasi maksimal.`}
      />
      <div>
        {/* Render tag hanya jika datanya tersedia */}
        {post.tag && (
          <h4 className="text-[#FFD700] font-semibold font-title_blog">
            {post.tag}
          </h4>
        )}
        <h4 className="text-[#FFD700] font-semibold font-title_blog">
          Matrix Education
        </h4>
        <h2 className="text-[23px] font-bold mt-5 text-white font-title_blog">
          {post.title}
        </h2>
        <h4 className="line-clamp-6 text-[#EAEAEA] mt-5 font-desc">
          {post.description}
        </h4>
        <div className="flex items-center mt-5">
          <Image
            loading="eager"
            src="/images/logo_edm.webp"
            className="w-12.5 rounded-full"
            width={100}
            height={100}
            alt="Logo resmi Edumatrix Indonesia, penyedia layanan les privat OSN dan pendidikan berkualitas terbaik dengan metode inovatif untuk siswa berprestasi."
          />
          <div className="ml-2">
            <h3 className="font-bold text-white font-title">
              {post.authorName}
            </h3>
            <h3 className="text-[#B0C4DE] font-desc">
              {formatDate(post.publishDate)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPostBlog;
