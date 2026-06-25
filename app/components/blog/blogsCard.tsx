import { formatDate } from "@/app/utils/formatDate";
import { imageUrlClient } from "@/app/utils/imageUrlClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface BlogPostItem {
  id: string | number;
  slug: string;
  mainImage: string;
  tag?: string;
  title: string;
  description: string;
  authorName: string;
  publishDate: string;
}

interface BlogsCardProps {
  posts: BlogPostItem[];
}

const BlogsCard: React.FC<BlogsCardProps> = ({ posts }) => {
  const navigate = useRouter();

  return (
    <div className="flex justify-center items-center mt-[4vh] pb-[6vh]">
      <div className="max-w-310 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 xl:px-0">
          {posts.map((item) => (
            <div
              key={item.id}
              className="m-4 cursor-pointer"
              onClick={() => navigate.push("blog/" + item.slug)}>
              <Image
                loading="eager"
                src={`${imageUrlClient}/articlequill-images/${item.mainImage}`}
                className="w-full rounded-2xl object-cover h-50"
                width={300}
                height={300}
                alt={`Artikel Blog Edumatrix Indonesia - ${item.title}: ${item.description}. Temukan informasi pendidikan berkualitas dan tips belajar yang bermanfaat untuk siswa di Edumatrix Indonesia.`}
              />
              <h3 className="text-[#FFD700] mt-3 font-title_blog">
                Edumatrix Education
              </h3>
              {/* <h3 className="text-red-500 mt-3">{item.tag}</h3> */}
              <h3 className="font-bold mt-3 text-white font-title_blog">
                {item.title}
              </h3>
              <h3 className="line-clamp-3 text-[#EAEAEA] mt-3 font-desc">
                {item.description}
              </h3>
              <div className="flex items-center mt-5">
                <Image
                  loading="eager"
                  src="/images/logo_edm.webp"
                  alt="Logo Edumatrix Indonesia, platform pendidikan untuk siswa dengan berbagai layanan dan artikel edukatif"
                  className="w-8.75 rounded-full"
                  width={100}
                  height={100}
                />
                <div className="ml-2">
                  <h3 className="font-bold text-[12px] text-white font-title_blog">
                    {item.authorName}
                  </h3>
                  <h3 className="text-[#B0C4DE] text-[10px] font-title_blog">
                    {formatDate(item.publishDate)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
