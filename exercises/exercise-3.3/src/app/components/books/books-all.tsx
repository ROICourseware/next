import { getBooks, getBooksCount } from '@/app/lib/actions/books/actions';
import BookCardList from '@/app/components/books/book-card-list';

export default async function BooksAll({ page, total }:
    {
        page: number,
        total: number
    }) {

    const pageSize =  10;
    const [count, books] = await Promise.all([
        total ? Promise.resolve(total) : getBooksCount(),
        getBooks(page, pageSize)
    ]);

    return (
        <>
            <BookCardList books={books} />
            <br />
        </>
    );
};

