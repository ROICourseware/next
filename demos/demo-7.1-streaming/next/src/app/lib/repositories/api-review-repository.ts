import { Review , ConfidentialReview} from '@/app/lib/models/review';
import BookRepository from '@/app/lib/repositories/api-book-repository';

const URL = process.env.API_URL;

class ReviewRepository {

  async getTotal(reviews: Review[]): Promise<number> {
    return reviews.length;
  }

  async fetchReviews(): Promise<ConfidentialReview[]> {
    const response = await fetch(`${URL}reviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const reviews: ConfidentialReview[] = await response.json();
    return reviews;
  }


  public async getReviewsByBookIdCount(bookId: number): Promise<number> {
    const reviews = await this.fetchReviews();
    const filteredReviews = reviews.filter(review => review.bookId === bookId);
    return await this.getTotal(filteredReviews);
  }

  public async getReviewsByBookId({ bookId, page = 1, limit = 6 }: { bookId: number, page?: number, limit?: number, total?: number }): Promise<Review[]> {
    const reviews = await this.fetchReviews();
    const filteredReviews = reviews.filter(review => review.bookId === bookId)
      .sort((a, b) => b.id - a.id);
    const result = filteredReviews.slice((page - 1) * limit, page * limit);
    return result.map(({ owner, ...review }) => review);
  }

  public async getReviewsByOwner(owner: string): Promise<Review[]> {
    const [reviews, books] = await Promise.all([this.fetchReviews(), new BookRepository().fetchBooks()]);
    const filteredReviews = reviews.filter(review => review.owner === owner)
      .sort((a, b) => b.id - a.id);;
      return filteredReviews.map((review) => {
        return {
          id: review.id,
          review: review.review,
          name: review.name,
          bookId: review.bookId,
          bookTitle: books.find(book => book.id === review.bookId)?.title || '',
        }
      });
  }

  public async getReviewToEdit(id: number): Promise<ConfidentialReview> {
    const reviews = await this.fetchReviews();
    const result = reviews.find(review => review.id === id);
    if (!result) {
      throw new Error('Review not found');
    }
    return result;
  }

  public async addReview(review: Review): Promise<Review> {
    const response = await fetch(`${URL}reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    if (!response.ok) {
      throw new Error('Failed to add book');
    }

    const result = await response.json();

    return (result as Review)

  }

  public async updateReview(review: Review): Promise<Review> {
    const response = await fetch(`${URL}reviews`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    if (!response.ok) {
      throw new Error('Failed to update review');
    }

    const result = await response.json();
    const { owner, ...rest } = result;
    return rest as Review;
  }


  public async deleteReview(id: number): Promise<void> {
    const response = await fetch(`${URL}reviews/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete review');
    }
  }

  public async deleteReviewsByBookId(bookId: number): Promise<void> {
    const reviews = await this.fetchReviews();
    const filteredReviews = reviews.filter(review => review.bookId === bookId);
    for (let i = filteredReviews.length - 1; i >= 0; i--) {
      await this.deleteReview(filteredReviews[i].id);
    }
  }

}




export default ReviewRepository;