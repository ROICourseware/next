
import { Review } from '@/app/lib/models/review';
import pool from '@/app/lib/repositories/pool';
import 'server-only';

// NB. for larger databases, cursors are preferred over offsets for pagination in production

class ReviewRepository {

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseReview(row: any): Review {
        return {
            id: row.id,
            review: row.review,
            name: row.name,
            bookId: row.book_id
        }
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseReviews(rows: any[]): Review[] {
        const parsed = rows.map((row) => {
            return this.parseReview(row);
        });
        return parsed;
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    async getTotal(query: string, params: any[] = []): Promise<number> {
        const result = await pool.query(query, params);
        return parseInt(result.rows[0].count, 10);
    }


    public async getReviewsByBookIdCount(bookId: number): Promise<number> {
        return await this.getTotal(`SELECT COUNT(*) FROM review WHERE book_id = $1`, [bookId]);
    }

    public async getReviewsByBookId({ bookId, page = 1, limit = 6 }: { bookId: number, page?: number, limit?: number, total?: number }): Promise<Review[]> {   
        const offset = (page - 1) * limit   
        const   result = await pool.query(
            `SELECT * FROM review WHERE book_id = $1 ORDER BY id DESC LIMIT $2 OFFSET $3`,
            [bookId, limit, offset]
        );
        return this.parseReviews(result.rows);
    }

    public async getReviewsByOwner( owner: string ): Promise<Review[]> {   
        const result = await pool.query(
            `SELECT r.id, r.review, r.name, r.book_id, b.title  FROM review r INNER JOIN book b ON r.book_id = b.id WHERE r.owner = $1 ORDER BY id DESC`, [owner]
        );
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        const sanitizedRows = result.rows.map((row: any) => {
            return {        
                id: row.id,
                review: row.review,
                name: row.name,
                bookId: row.book_id,    
                bookTitle: row.title
            }
        });
        return sanitizedRows;
    }

    public async getReview(id: number): Promise<Review> {
        const   result = await pool.query('SELECT * FROM review WHERE id = $1', [id]);
        const row = result.rows[0];
        return {
            id: row.id,
            review: row.review,
            name: row.name,
            bookId: row.book_id,
            owner: row.owner
        }
    }

    public async addReview(review: Review): Promise<number> {
        const query = 'INSERT INTO review (review, name, owner, book_id) VALUES ($1, $2, $3, $4) RETURNING id';
        const values = [review.review, review.name, review.owner, review.bookId, ];
        const result = await pool.query(query, values);
        return parseInt(result.rows[0]);
    }

    public async updateReview(review: Review) : Promise<Review> {
        const query = 'UPDATE review SET review = $1 where id = $2 RETURNING *';
        const values = [review.review, review.id];

        try {
            const result = await pool.query(query, values);
            return this.parseReview(result.rows[0]);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error updating review');
        }
    }

    public async deleteReview(id: number): Promise<void> {
        await pool.query('DELETE FROM review WHERE id = $1', [id]);
    }



}




export default ReviewRepository;