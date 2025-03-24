'use server';

import ReviewRepository from "@/app/lib/repositories/review-repository";
import { ConfidentialReview, Review } from "@/app/lib/models/review";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { z } from "zod";

const addFormSchema = z.object({
    review: z.string({
        invalid_type_error: 'Please add the review',
    }).min(5, { message: 'Review must be at least 5 character long' }),
});

export type State = {
    errors?: {
        review?: string[];
    }
    message?: string | null;
};

async function validate(formData: FormData) {
    return addFormSchema.safeParse({
        review: formData.get("review"),
    });
}

async function checkUser() {
    const session = await auth();
    if (!session?.user?.email || !session?.user?.name) {
        redirect('/');
    }
    return { name: session.user.name, email: session.user.email };
}

export async function addReview(prevState: State, formData: FormData) {

    const { name, email } = await checkUser();
    const validatedData = await validate(formData);
    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: "Please fill in the required fields"
        };
    };

    const review: ConfidentialReview = {
        review: validatedData.data.review,
        bookId: parseInt(formData.get("bookId") as string),
        name: name,
        id: 0,
        owner: email
    };

    await new ReviewRepository().addReview(review);
    redirect(`/reviews/${review.bookId}`);
}

export async function updateReview(prevState: State, formData: FormData) {
    const { email } = await checkUser();

    const validatedData = await validate(formData);
    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: "Please fill in the required fields"
        };
    };
    const repo = new ReviewRepository();
    const review = await repo.getReviewToEdit(parseInt(formData.get("id") as string, 10));
    if (email !== review.owner) {
        redirect('/');
    }
    review.review = validatedData.data.review;
    await repo.updateReview(review);
    redirect(`/reviews/${review.bookId}`);
}

export async function deleteReview(id: number) {
    const { email } = await checkUser();
    const repo = new ReviewRepository()
    const review = await repo.getReviewToEdit(id);
    if (email !== review.owner) {
        redirect('/');
    }
    await repo.deleteReview(id);
    redirect('/reviews/mine');
}

export async function getReviewsByOwner(owner: string): Promise<Review[]> {
    return await new ReviewRepository().getReviewsByOwner(owner);
}

export async function getReviewsByBookIdCount(bookId: number): Promise<number> {
    return await new ReviewRepository().getReviewsByBookIdCount(bookId);
}

export async function getReviewsByBookId(bookId: number, page: number, limit: number): Promise<Review[]> {
    return await new ReviewRepository().getReviewsByBookId({ bookId, page, limit });
}

