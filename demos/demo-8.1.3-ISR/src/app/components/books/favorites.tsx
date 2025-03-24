'use client';

import BookCard from '@/app/components/books/book-card';
import useFavorites from '@/app/components/utilities/use-favorites';

export default function Favorites() {

    const { favorites, fetchFavorites } = useFavorites();

    return (
        <div className="row">
            {favorites.length > 0 ? (
                favorites.map((book) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <BookCard book={book} favorites={favorites} onFavoriteChange={fetchFavorites} />
                    </div>
                ))
            ) : (
                <p>You do not seem to have selected any favorites yet.</p>
            )}
        </div>
    );
};

