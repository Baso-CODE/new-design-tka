import { getCategoryArticleRequestClient } from "@/app/request/article/getAllCategoryArticleRequest";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Breadcrumb from "./breadcrumb";

// Interface untuk state kategori setelah di-format
interface CategoryItem {
  id: string | number | null;
  name: string;
}

// Interface untuk Props Komponen
interface SearchBlogProps {
  selectedTag: (id: string | number | null) => void;
  onSearch: (searchTerm: string) => void;
}

const SearchBlog: React.FC<SearchBlogProps> = ({ selectedTag, onSearch }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategoryArticleRequestClient();

        const formattedCategories: CategoryItem[] = [
          { id: null, name: "All" },
          ...result.data.map((category) => ({
            id: category.id,
            name: category.name,
          })),
        ];
        setCategories(formattedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="flex items-center justify-center px-3">
      <div className="max-w-310 w-full mt-[15vh]">
        <Breadcrumb selectedTag={categories[activeIndex]?.name || "All"} />
        <div className="flex flex-col items-center">
          <img
            src="/images/hero-blog-edm.webp"
            loading="lazy"
            className="rounded-2xl w-full"
            alt="Edumatrix Indonesia - Bimbingan Belajar Terbaik dengan Fokus pada Persiapan OSN untuk Siswa Berprestasi. Platform Mobile yang Mudah Diakses dan Efisien."
          />

          {/* Form untuk Submit */}
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white shadow-lg p-2 md:p-3 rounded-lg -mt-5 flex items-center space-x-2 md:w-[50%] w-[80%]">
            <FaSearch className="text-[20px] text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearchChange}
              className="outline-none ml-2 w-full font-semibold font-title_blog text-gray-700"
            />
            <button
              type="submit"
              className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-title_blog">
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-[0.45rem] justify-center mt-5">
            {categories.map((category, index) => (
              <button
                key={category.id || index}
                onClick={() => {
                  setActiveIndex(index);
                  selectedTag(category.id); // Kirimkan categoryId ke parent
                }}
                className={`${
                  index === activeIndex
                    ? "bg-[#FFD700] text-[#04397d]"
                    : "bg-transparent text-gray-300 dark:text-gray-100"
                } px-4 py-2 text-sm md:text-base font-title_blog rounded-full border-2 border-[#FFD700] transition-all duration-150 ease-in-out hover:bg-[#1E90FF] hover:text-white`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlog;
