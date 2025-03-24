import { searchBooks, searchBooksCount } from '@/app/lib/actions/books/actions';

import BookCardList from '@/app/components/books/book-card-list';


export default async function BooksTitle({ page, total, title }:
    {
        page: number,
        total: number,
        title: string
    }) {

    const pageSize =  10;
    const [count, books] = await Promise.all([
        total ? Promise.resolve(total) : searchBooksCount(title),
        searchBooks(title, page, pageSize)
    ]);

    return (
        <>
            <BookCardList books={books} />
            <br />
        </>
    );
};

