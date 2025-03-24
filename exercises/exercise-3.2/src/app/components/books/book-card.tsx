import { Book } from '@/app/lib/models/book';
import Link from 'next/link';
import Image from 'next/image';

export default function BookCard({ book }: { book: Book }) {
    return (
        <div className="card book-card">
            <Image src={book.cover || "/no-cover.svg"} alt={book.title} height="248" width="248" className="card-img-top" />
            <div className="card-body">
                <p className="card-title">
                    <Link href={`/reviews/${book.id}`}>{book.title}</Link>
                </p>
                <p className="card-text">
                    {book.author}
                </p>
            </div>
        </div>
    );
}
