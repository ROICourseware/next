import { Book, ConfidentialBook } from "@/app/lib/models/book";
import ReviewRepository from "@/app/lib/repositories/api-review-repository";
import 'server-only';

const URL = process.env.API_URL;

class BookRepository {

  public async getBooksCount(): Promise<number> {
    const count = (await this.fetchBooks()).length;
    return count;
  }

  async fetchConfidentialBooks(): Promise<ConfidentialBook[]> {
    const response = await fetch(`${URL}books`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const books: ConfidentialBook[] = await response.json();
    return books;
  }

  async fetchBooks(): Promise<Book[]> {
    const books = await this.fetchConfidentialBooks();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return books.map(({ owner, ...book }) => book);
  }

  public async getBooks({ page = 1, limit = 6 }: { page?: number, limit?: number } = {}): Promise<Book[]> {
    const books = await this.fetchBooks();
    const results = books.sort((a, b) => a.title.localeCompare(b.title));
    return results.slice((page - 1) * limit, page * limit);
  }

  public async getRecent(): Promise<Book[]> {
    const books = await this.fetchBooks();
    return books.sort((a, b) => b.id - a.id).slice(0, 3);
  }

  public async searchBooksCount(query: string): Promise<number> {
    const books = await this.fetchBooks();
    const results = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.title.localeCompare(b.title));;
    return results.length;
  }

  public async searchBooks({ query = '', page = 1, limit = 6 }: { query?: string, page?: number, limit?: number } = {}): Promise<Book[]> {
    const books = await this.fetchBooks();
    const results = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
      return [];
    }
    const sorted = results.sort((a, b) => a.title.localeCompare(b.title))
      .slice((page - 1) * limit, page * limit);
    return sorted;
  }

  public async getBooksByAuthorCount(author: string): Promise<number> {
    const books = await this.fetchBooks();
    const results = books.filter((book) => book.author === author);
    return results.length;
  }

  public async getBooksByAuthor({ author = '', page = 1, limit = 6 }: { author?: string, page?: number, limit?: number } = {}): Promise<Book[]> {
    const books = await this.fetchBooks();
    const results = books.filter((book) => book.author === author)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice((page - 1) * limit, page * limit);
    return results;
  }

  public async getBooksByOwner(owner: string): Promise<Book[]> {
    const books = await this.fetchConfidentialBooks();
    const results = books.filter((book) => book.owner === owner)
      .sort((a, b) => a.title.localeCompare(b.title));
    return results;
  }

  public async getBook(id: number): Promise<Book> {
    const book = await this.getBookToEdit(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { owner, ...rest } = book;
    return rest;
  }

  public async getBookToEdit(id: number): Promise<ConfidentialBook> {
    const books = await this.fetchConfidentialBooks();
    const result = books.find((book) => book.id === id);
    if (!result) {
      throw new Error('Book not found');
    }
    return result;
  }

  public async addBook(book: Book): Promise<number> {
    const response = await fetch(`${URL}books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error('Failed to add book');
    }

    const result = await response.json();

    return (result as Book).id
  }

  public async updateBook(book: Book): Promise<Book> {
    const response = await fetch(`${URL}books`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error('Failed to update book');
    }

    const result = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { owner, ...rest } = result;
    return rest;

  }

  public async deleteBook(id: number): Promise<void> {
    // call the reviews mock repo and delete reviews for this book
    const repo = new ReviewRepository();
    await repo.deleteReviewsByBookId(id);

    const response = await fetch(`${URL}books/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
  }

}

export default BookRepository;