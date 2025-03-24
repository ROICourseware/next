import ReviewsOwner from "@/app/components/reviews/reviews-owner";
import { ReviewsSkeleton } from "@/app/components/skeletons/review-skeletons";
import { Suspense } from "react";


export default async function MyReviews() {

    return (<div>
            <Suspense fallback={<ReviewsSkeleton />}>
               <ReviewsOwner />
            </Suspense>
    </div>)
}