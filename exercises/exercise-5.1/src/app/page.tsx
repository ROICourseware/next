import { Suspense } from "react";
import { CardListSkeleton } from "@/app/components/skeletons/book-skeletons";
import BooksRecent from "@/app/components/books/books-recent";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next Level Book Reactions</h1>
      <p>Where you react to books.</p>
      <h2>Recently added books:</h2>
      <Suspense fallback={<CardListSkeleton />}>
        <BooksRecent />
      </Suspense>
    </div>
  );
}
