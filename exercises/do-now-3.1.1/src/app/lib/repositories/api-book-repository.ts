import { Book, ConfidentialBook } from "@/app/lib/models/book";
import 'server-only';

const URL = "http://localhost:3030/api/bookreactions/";

class BookRepository {

  public async getBooks(): Promise<Book[]> {
    const response = await fetch(`${URL}books`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const books: ConfidentialBook[] = await response.json();
    return books.map(({ owner, ...book }) => book);
  }
}

export default BookRepository;