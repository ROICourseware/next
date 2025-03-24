'use client';
import BookCard from '@/app/components/books/book-card';
import { Book } from '@/app/lib/models/book';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function BooksAll() {

    const { data: books, error } = useSWR('http://localhost:3030/api/bookreactions/books', fetcher);
    if (error) return <p>Error loading data</p>;


    return (
        <div className="row">
            {books?.map((book: Book) => (
                <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
};

