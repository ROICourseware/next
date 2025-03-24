import BookCardList from "@/app/components/books/book-card-list";
import BooksProvider from "@/app/components/books/query-provider";
import { CardListSkeleton } from "@/app/components/skeletons/book-skeletons";
import { Suspense } from "react";

export default function Books() {
    return (
        <div>
            <Suspense fallback={<CardListSkeleton />}>
            <BooksProvider />
            </Suspense>
        </div>
    );
}