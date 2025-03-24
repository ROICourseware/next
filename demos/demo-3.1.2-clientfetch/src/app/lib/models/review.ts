export type Review = {
    id: number;
    review: string;
    name: string;
    owner?: string;
    bookId: number;
    bookTitle?: string;
};