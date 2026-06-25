import { baseUrlClient } from "../../utils/config";

// Menentukan struktur data response API
export interface ArticleQuillResponse {
  data: any[];
  [key: string]: any;
}

export const getAllIsDeletedArticleQuill = async (
  categoryId: string | number | null = null,
  searchQuery: string = "",
): Promise<ArticleQuillResponse> => {
  const params = new URLSearchParams();

  if (categoryId) params.append("categoryId", categoryId.toString());
  if (searchQuery) params.append("searchQuery", searchQuery);

  const response = await fetch(
    `${baseUrlClient}/articlequills/isDeleted/all?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
};
