import BookCard from '@/app/components/books/book-card';
import { Book } from '@/app/lib/models/book';

export default  function BookCardList({ books }:
    {
        books: Book[];
    }) {

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

