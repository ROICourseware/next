import { experimental_taintObjectReference, experimental_taintUniqueValue } from 'react';
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


  public async getBook(id: number) {
    const response = await fetch(`${URL}books`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const books: ConfidentialBook[] = await response.json();
    const book = books.find((book) => book.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    experimental_taintObjectReference(
      'Do not pass user data to the client',
      book
    );
    experimental_taintUniqueValue(
      'Do not pass tokens to the client',
      book,
      book.owner
    );
    return [book];
  }

  

}

export default BookRepository;