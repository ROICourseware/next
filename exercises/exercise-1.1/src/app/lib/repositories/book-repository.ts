
import { Book, ConfidentialBook } from "@/app/lib/models/book";
import pool from '@/app/lib/repositories/pool';
import 'server-only';

// NB. for larger databases, cursors are preferred over offsets for pagination in production

class BookRepository {

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseBook(row: any): Book {
        return {
            id: row.id,
            title: row.title,
            author: row.author,
            cover: row.cover === 'null' ? '' : row.cover,
        }
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseBooks(rows: any[]): Book[] {
        const parsed = rows.map((row) => {
            return this.parseBook(row);
        });
        return parsed;  
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    async getTotal(query: string, params: any[] = []): Promise<number> {
        const result = await pool.query(query, params);
        return parseInt(result.rows[0].count, 10);
    }

    public async getBooksCount(): Promise<number> {
        const result = await pool.query('SELECT COUNT(*) FROM book');
        return parseInt(result.rows[0].count, 10);
    }

    public async getBooks({ page = 1, limit = 6 }: { page?: number, limit?: number} = {}): Promise<Book[]> {
        const offset = (page - 1) * limit;
        const result = await pool.query('SELECT * FROM book ORDER BY title ASC LIMIT $1 OFFSET $2',[limit, offset])
        return this.parseBooks(result.rows);
    }

    public async getRecent(): Promise<Book[]> {
        const result = await pool.query('SELECT * FROM book ORDER BY id DESC LIMIT 3')
        return this.parseBooks(result.rows);
    }

    public async searchBooksCount(query: string): Promise<number> {
        const searchQuery = `%${query}%`;
        const beginQuery = `${query}%`;
       return await this.getTotal('SELECT COUNT(*) FROM book WHERE title ILIKE $1 OR title ILIKE $2', [beginQuery, searchQuery]);   
    }

    public async searchBooks({ query = '', page = 1, limit = 6}: { query?: string, page?: number, limit?: number } = {}): Promise<Book[]> {   
        const searchQuery = `%${query}%`;
        const beginQuery = `${query}%`;
        const offset = (page - 1) * limit;
        const result = await pool.query(
            'SELECT * FROM book WHERE title ILIKE $1 OR title ILIKE $2 ORDER BY title ASC LIMIT $3 OFFSET $4',
            [beginQuery, searchQuery, limit, offset]
        );
        return this.parseBooks(result.rows);
    }

    public async getBooksByAuthorCount(author: string): Promise<number> {
       return await this.getTotal(`SELECT COUNT(*) FROM book WHERE author = $1`, [author]);
    }

    public async getBooksByAuthor({ author, page = 1, limit = 6 }: { author: string, page?: number, limit?: number }): Promise<Book[]> {   
        const offset = (page - 1) * limit
        const result = await pool.query(
            `SELECT * FROM book WHERE author = $1 ORDER BY title ASC LIMIT $2 OFFSET $3`,
            [author, limit, offset]
        );
        return this.parseBooks(result.rows);
    }

    public async getBooksByOwner(owner: string): Promise<Book[]> {
        const  result = await pool.query('SELECT * FROM book WHERE owner = $1 ORDER by title ASC', [owner]);
        return this.parseBooks(result.rows);
    }

    public async getBook(id: number): Promise<Book> {
        const   result = await pool.query('SELECT * FROM book WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            throw new Error('Book not found');
        }   
       return this.parseBook(result.rows[0]);
    }

    public async getBookToEdit(id: number): Promise<ConfidentialBook> {
        const   result = await pool.query('SELECT * FROM book WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            throw new Error('Book not found');
        }   
        const row = result.rows[0];
        return {
            id: row.id,
            title: row.title,
            author: row.author,
            cover: row.cover === 'null' ? '' : row.cover,
            owner: row.owner
        }
    }


    public async addBook(book: ConfidentialBook): Promise<number> {
        const query = 'INSERT INTO book (title, author, cover, owner) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [book.title, book.author, book.cover, book.owner];

        try {
            const result = await pool.query(query, values);
            return result.rows[0].id;
        }
        catch (error) {
            console.log(error);
            throw new Error('Error adding book');
        }
    }

    public async updateBook(book: Book): Promise<Book> {
        const query = 'UPDATE book SET title = $1, author = $2, cover = $3 WHERE id = $4 RETURNING *';
        const values = [book.title, book.author, book.cover, book.id];

        try {
            const result = await pool.query(query, values);
            return this.parseBook(result.rows[0]);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error updating book');
        }
    }

    public async deleteBook(id: number): Promise<void> {
        // add transaction to delete this book from book table and also delete reviews of this book from the review table
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            await client.query('DELETE FROM review WHERE book_id = $1', [id]);
            await client.query('DELETE FROM book WHERE id = $1', [id]);
            await client.query('COMMIT');
        } catch (error) {
            await client.query('ROLLBACK');
            console.log(error);
            throw new Error('Error deleting book and its reviews');
        } finally {
            client.release();
        }
    }

}


export default BookRepository;