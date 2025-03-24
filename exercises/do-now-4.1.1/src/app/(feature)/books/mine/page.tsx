import BooksOwner from "@/app/components/books/books-owner";
import { CardListSkeleton } from "@/app/components/skeletons/book-skeletons";
import { Suspense } from "react";

export default async function MyBooks() {
    return (<div>
        <Suspense fallback={<CardListSkeleton />}>
            <BooksOwner />
        </Suspense>
    </div>)
}