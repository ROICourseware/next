import { Review } from "@/app/lib/models/review";

export default function ReviewDisplay({ review }: { review: Review }) {
    return (
        <div className="list-group-item review-item">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="review-text">{review.review}</p>
                    <p className="review-title">{review.name}</p>
                </div>
            </div>
        </div>
    );
}

