import { baseUrlClient } from "../../utils/config";

export interface CategoryData {
  id: string | number;
  name: string;
  [key: string]: any;
}

// Interface untuk response API
export interface CategoryArticleResponse {
  data: CategoryData[];
}

export async function getCategoryArticleRequestClient(): Promise<CategoryArticleResponse> {
  try {
    const article = await fetch(`${baseUrlClient}/category-article/all`);

    if (!article.ok) {
      throw new Error(`HTTP error! status: ${article.status}`);
    }

    const result: CategoryArticleResponse = await article.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
