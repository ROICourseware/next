import { getBooksByOwner } from '@/app/lib/actions/books/actions';
import { Book } from '@/app/lib/models/book';
import { auth } from '@/auth';
import BookCardList from './book-card-list';

export default async function BooksOwner() {
    const session = await auth()

    const books: Book[] = session?.user?.email ? await getBooksByOwner(session.user.email) : [];

    return (<BookCardList books={books} />);
};

