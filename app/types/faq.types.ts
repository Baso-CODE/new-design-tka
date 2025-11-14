export interface FAQ {
  id: number;
  pertanyaan: string;
  jawaban: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetFAQResponse {
  data: FAQ[];
  message: string;
}
