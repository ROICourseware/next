import { getRecentBooks } from '@/app/lib/actions/books/actions';
import { Book } from '@/app/lib/models/book';
import BookCardList from './book-card-list';


export default async function BooksRecent() {

    const books: Book[] = await getRecentBooks();
    
    return (<BookCardList books={books} />);
};

