import BooksAll from "@/app/components/books/books-all";
import BooksTitle from "@/app/components/books/books-title";
import { CardListSkeleton } from "@/app/components/skeletons/book-skeletons";
import { Suspense } from "react";


export default async function Books(props: {
    searchParams?: Promise<{
        title?: string;
        page?: string;
        total?: string;
    }>;
}) {

    const searchParams = await props.searchParams;
    const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
    const total = searchParams?.total ? parseInt(searchParams.total, 10) : 0;
    const title = searchParams?.title ? searchParams.title : '';

    return (
        <div>
            <Suspense fallback={<CardListSkeleton />}>
                {title && <BooksTitle title={title} page={page}  total={total} />}
                {!title && <BooksAll page={page}  total={total} />  }
            </Suspense>
        </div>
    );
}