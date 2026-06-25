import { baseUrlClient } from "@/app/utils/config";

// Interface untuk struktur data artikel dari API
export interface ArticleDetailData {
  id: string | number;
  slug: string;
  mainImage: string;
  tag?: string;
  title: string;
  description: string;
  descriptionQuill: string;
  authorName: string;
  publishDate: string;
}

export interface ArticleQuillDetailResponse {
  data: ArticleDetailData;
  [key: string]: any;
}

export async function getArticleWithQuillBySlugRequest({
  slug,
}: {
  slug: string;
}): Promise<ArticleQuillDetailResponse> {
  try {
    const article = await fetch(`${baseUrlClient}/articlequills/get/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!article.ok) {
      throw new Error("Failed to fetch article details");
    }

    return article.json();
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
