'use client';

import { addReview, updateReview, State } from "@/app/lib/actions/reviews/actions";
import { useActionState } from "react";
import { Review } from "@/app/lib/models/review";

export default function ReviewForm({ review }: { review: Review }) {

    const reviewAction = review.id === 0 ? addReview : updateReview;
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(reviewAction, initialState);

    return (
        <form action={formAction} className="mt-4 row">
            <div className="mb-3">
                <label htmlFor="review" className="form-label">Review </label>
                <textarea name="review" id="review"
                    required
                    minLength={5}
                    style={{ height: '10rem' }}
                    className="form-control form-control-lg" placeholder="Review" defaultValue={review.review} />
                {state.errors?.review &&
                    state.errors.review.map((error: string) => (
                        <p className="alert alert-danger mt-1" key={error}>
                            {error}
                        </p>
                    ))}
            </div>
            <div>
                <input type="hidden" name="bookId" value={review.bookId} />
                <input type="hidden" name="id" value={review.id} />
                <button type="submit" className="btn btn-secondary dialog-button">{review.id === 0 ? 'Add' : 'Update'} Review</button>
                {state.message && <p className="mt-3 alert alert-danger">{state.message}</p>}
            </div>
        </form>
    );
}