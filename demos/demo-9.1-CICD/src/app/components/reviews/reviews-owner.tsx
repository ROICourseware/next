import { getReviewsByOwner } from '@/app/lib/actions/reviews/actions';
import { Review } from '@/app/lib/models/review';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import ReviewDisplay from '@/app/components/reviews/review-display';

export default async function ReviewsOwner() {
    const session = await auth()

    if (!session?.user?.email) {
        redirect('/');
    }
    const reviews: Review[] = await getReviewsByOwner(session.user.email);

    return (
        <div className="list-group">
            {reviews.map((review) => (
                <div key={review.id}>
                    <p>{review.bookTitle}</p>
                    <ReviewDisplay review={review} owned={true}  />
                </div>
            ))}
        </div>
    )
};

