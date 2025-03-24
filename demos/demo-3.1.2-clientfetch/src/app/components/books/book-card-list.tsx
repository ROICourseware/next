'use client';
import BookCard from '@/app/components/books/book-card';
import { Book } from '@/app/lib/models/book';
import { useQuery } from "@tanstack/react-query";


const fetchBooks = async () => {
  const res = await fetch("http://localhost:3030/api/bookreactions/books");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function BookCardList() {
    const { data: books, error, isLoading } = useQuery({
        queryKey: ["books"], 
        queryFn: fetchBooks,
      });
    
      if (error) return <p>Error loading data</p>;
      if(!books) return <p>Loading...</p>;

    return (
        <div className="row">
            {books.map((book: Book) => (
                <div key={book.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
};

