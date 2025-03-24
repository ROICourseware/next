import { getRecentBooks } from '@/app/lib/actions/books/actions';
import { Book } from '@/app/lib/models/book';
import BookCardList from './book-card-list';
import { unstable_cache } from 'next/cache';

export default async function BooksRecent() {

    const getRecent = unstable_cache(getRecentBooks, ["recent"], {revalidate: 60});
    const books: Book[] = await getRecent();
    
    return (<BookCardList books={books} />);
};

