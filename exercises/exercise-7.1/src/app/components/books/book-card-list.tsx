'use client';

import BookCard from '@/app/components/books/book-card';
import { Book } from '@/app/lib/models/book';
import useFavorites from '@/app/components/utilities/use-favorites';

export default function BookCardList(
    {   books, 
        owned = false
    }:
    {
        books: Book[];
        owned?: boolean;
    }) {

    const { favorites, fetchFavorites } = useFavorites();

    return (
        <div className="row">
            {books.map((book) => (
                <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <BookCard book={book} favorites={favorites} owned={owned}  />
                </div>
            ))}
        </div>
    );
};

