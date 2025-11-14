export interface Promo {
  id: number;
  title: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetPromoResponse {
  data: Promo[];
  message: string;
}
