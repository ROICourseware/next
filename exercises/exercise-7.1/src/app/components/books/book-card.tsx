'use client';

import { Book } from '@/app/lib/models/book';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Modal from '@/app/components/utilities/modal';
import { deleteBook } from '@/app/lib/actions/books/actions';
import { updateData } from '@/app/lib/utilities/db';

export default function BookCard({ book, owned, favorites = [], onFavoriteChange }
    : { book: Book, owned?: boolean, favorites: Book[],
        onFavoriteChange?: () => void 
     }) {

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(favorites.some(fav => fav.id === book.id));
    }, [favorites, book]);

    const toggleFavorite = async () => {
        await updateData('favorites', book, !favorite);
        setFavorite(!favorite);
        if (onFavoriteChange) {
            onFavoriteChange();
        }
    }
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDialog = () => {
        setIsModalOpen(true);
    };

    const closeDialog = () => {
        setIsModalOpen(false);
    };

    const bookDelete = (id: number) => {
        deleteBook(id);
        closeDialog();
    }

    return (
        <div className="card book-card">
             <button className="outline-primary"  onClick={toggleFavorite} type="button">
                {favorite ? '-' : '+'} Favorite</button>
            <br />
            <Image src={book.cover || "/no-cover.svg"} alt={book.title} height="248" width="248" className="card-img-top" />
            <div className="card-body">
                <p className="card-title">
                    <Link href={`/reviews/${book.id}`}>{book.title}</Link>
                </p>
                <p className="card-text">
                    {book.author}
                </p>
                {owned &&
                    <>
                        <p> <Link className="btn btn-secondary" href={`/books/${book.id}/edit`}>Edit</Link></p>
                        <button onClick={openDialog} className="btn btn-secondary">Delete</button>
                    </>
                }
            </div>
            <Modal show={isModalOpen} close={closeDialog} selector="#portal">
                <Image src={book.cover || "/no-cover.svg"} alt={book.title} height="248" width="248" className="card-img-top" />
                <button onClick={() => bookDelete(book.id)} className="btn btn-danger dialog-button" type="button">Delete {book.title}</button>
            </Modal>
        </div>
    );
}
