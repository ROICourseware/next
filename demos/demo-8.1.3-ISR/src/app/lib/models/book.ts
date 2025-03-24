export type Book = {
    id: number;
    title: string;
    cover?: string;
    author: string;
};

export type ConfidentialBook = Book & {
    owner: string;
  };