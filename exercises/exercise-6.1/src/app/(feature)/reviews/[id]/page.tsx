import BookCard from "@/app/components/books/book-card";
import ReviewsList from "@/app/components/reviews/reviews-list";
import { ReviewsSkeleton } from "@/app/components/skeletons/review-skeletons";
import { getBook } from "@/app/lib/actions/books/actions";
import { Suspense } from "react";

export default async function Reviews(props: { params: Promise<{ id: string }>, 
    searchParams?: Promise<{
    page?: string;
    total?: string;
  }> }) {
    const params = await props.params;
    const bookId = parseInt(params.id);
    const searchParams = await props.searchParams;
    const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
    const total = searchParams?.total ? parseInt(searchParams.total, 10) : 0;
    const book = await getBook(bookId);


    return (
        <div>
            <div style={{ float: 'left', marginRight: '1rem' }}>
              <BookCard book={book} />
            </div>
            <Suspense fallback={<ReviewsSkeleton />}>
               <ReviewsList page={page} total={total} id={bookId} />
            </Suspense>
        </div>
    );
}