import { getReviewsByBookId, getReviewsByBookIdCount } from '@/app/lib/actions/reviews/actions';
import Pagination from '@/app/components/utilities/pagination';
import ReviewDisplay from '@/app/components/reviews/review-display';

export default async function ReviewList({ page, total, id }:
    {
        page: number,
        total: number,
        id: number
    }) {

    const pageSize = process.env.NEXT_PUBLIC_PAGE_SIZE ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE) : 10;
    const [count, reviews] = await Promise.all([
        total ? Promise.resolve(total) : getReviewsByBookIdCount(id),
        getReviewsByBookId(id, page, pageSize),
    ]);
   
    return (
        <div>
            <h2>Reader Reactions:</h2>
            <div className="list-group">
                {reviews.map((review) => (
                    <ReviewDisplay review={review} key={review.id} />
                ))}
            </div>
            <Pagination total={count} currentPage={page} />
        </div>
    );
};

