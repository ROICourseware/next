'use server';

import ReviewRepository from "@/app/lib/repositories/api-review-repository";
import { Review } from "@/app/lib/models/review";

export async function getReviewsByBookIdCount(bookId: number): Promise<number> {
    return await new ReviewRepository().getReviewsByBookIdCount(bookId);
}

export async function getReviewsByBookId(bookId: number, page: number, limit: number): Promise<Review[]> {
    return await new ReviewRepository().getReviewsByBookId({ bookId, page, limit });
}
