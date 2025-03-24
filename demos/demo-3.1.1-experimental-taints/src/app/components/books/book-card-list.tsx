import BookCard from '@/app/components/books/book-card';
import { getBooks } from '@/app/lib/actions/books/actions';

export default async function BookCardList() {
    const books = await getBooks();

    return (
        <div className="row">
            {books.map((book) => (
                <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
};

