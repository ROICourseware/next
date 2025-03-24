'use client';

import BookCard from '@/app/components/books/book-card';
import useFavorites from '../utilities/use-favorites';

export default function Favorites() {

     const favorites = useFavorites();

    return (
        <div className="row">
            {favorites.length > 0 ? (
                favorites.map((book) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <BookCard book={book} favorites={favorites}  />
                    </div>
                ))
            ) : (
                <p>You don't seem to have selected any favorites yet.</p>
            )}
        </div>
    );
};

