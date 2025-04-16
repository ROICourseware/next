
import { describe, it, expect, vi, Mock } from 'vitest';
import ReviewRepository from "@/app/lib/repositories/review-repository";
import { ConfidentialReview, Review } from "@/app/lib/models/review";
import {
    getReviewsByBookIdCount,
    getReviewsByBookId,
    addReview,
    updateReview,
    deleteReview,
    getReviewsByOwner,
} from './actions';
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { beforeEach } from 'node:test';
import 'server-only';

// original code from the instructions
// vi.mock('@/app/lib/repositories/review-repository');

// original version of the mock from the instructions
// vi.mock('next/navigation', () => ({
//     redirect: vi.fn(),
//   }));

// these versions of the mock allow individual tests to customize the mock implementation
const mocks = vi.hoisted(() => {
    return {
        redirect: vi.fn(),
    };
});

vi.mock('next/navigation', () => {
    return {
        redirect: mocks.redirect,
    };
});

vi.mock('@/auth', () => ({
    auth: vi.fn(),
}));

vi.mock("server-only", () => ({}));


describe('Review Actions', () => {

    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('should add a review', async () => {
        const newReview: ConfidentialReview = { id: 2, 
            review: 'This is a test review', 
            name: 'John Doe', 
            bookId: 1, 
            owner: 'john.doe2@example.com' };
        vi.spyOn(ReviewRepository.prototype, 'addReview').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', 'This is a test review');
        formData.append('bookId', '1');

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
                name: 'John Doe',
            },
        });

        await addReview(prevState, formData);

        expect(ReviewRepository.prototype.addReview).toHaveBeenCalledWith(expect.objectContaining({
            review: 'This is a test review',
            bookId: 1,
            name: 'John Doe',
            owner: 'john.doe@example.com',
        }));
        expect(redirect).toHaveBeenCalledWith('/reviews/1');
    });


    it('should get reviews count by book id', async () => {
        const bookId = 1;
        const mockCount = 500;
        vi.spyOn(ReviewRepository.prototype, 'getReviewsByBookIdCount').mockResolvedValue(mockCount);
        const result = await getReviewsByBookIdCount(bookId);
        expect(result).toBe(mockCount);
        expect(ReviewRepository.prototype.getReviewsByBookIdCount).toHaveBeenCalledWith(bookId);
    });

    it('should get reviews by book id', async () => {
        const bookId = 1;
        const page = 1;
        const limit = 10;
        const mockReviews: Review[] = [{ id: 1, review: 'Great book!', name: 'John Doe', bookId: 1 }];
        ReviewRepository.prototype.getReviewsByBookId = vi.fn().mockResolvedValue(mockReviews);
        const result = await getReviewsByBookId(bookId, page, limit);
        expect(result).toEqual(mockReviews);
        expect(ReviewRepository.prototype.getReviewsByBookId).toHaveBeenCalledWith({ bookId, page, limit });
    });


    it('should update a review', async () => {
        const newReview: ConfidentialReview = {
            id: 2, review: 'This is a test review',
            name: 'John Doe', bookId: 1, owner: "john.doe@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'updateReview').mockResolvedValue(newReview);
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', 'This is a test review');
        formData.append('bookId', '1');

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });

        await updateReview(prevState, formData);

        expect(ReviewRepository.prototype.updateReview).toHaveBeenCalledWith(expect.objectContaining({
            id: 2,
            review: 'This is a test review',
            bookId: 1,
            name: 'John Doe',
            owner: 'john.doe@example.com',
        }));
        expect(redirect).toHaveBeenCalledWith('/reviews/1');
    });

    it('should return error message if fails valdiation when updating a review', async () => {
        const newReview: ConfidentialReview = {
            id: 2, review: '',
            name: 'John Doe', bookId: 1, owner: "john.doe@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'updateReview').mockResolvedValue(newReview);
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', newReview.review);
        formData.append('bookId', newReview.bookId.toString());

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });

        const errorMessage = await updateReview(prevState, formData);
        expect(errorMessage?.message).toBe('Please fill in the required fields');

    });


    it('should return error message if fails min length valdiation when updating a review', async () => {
        const newReview: ConfidentialReview = {
            id: 2, review: 'Too',
            name: 'John Doe', bookId: 1, owner: "john.doe@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'updateReview').mockResolvedValue(newReview);
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', newReview.review);
        formData.append('bookId', newReview.bookId.toString());

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });

        const errorMessage = await updateReview(prevState, formData);
        expect(errorMessage?.errors.review).toStrictEqual(['Review must be at least 5 character long']);

    });


    it('should redirect to home if updating a review the user does not own', async () => {
        const newReview: ConfidentialReview = {
            id: 2, review: 'This is a test review',
            name: 'John Doe', bookId: 1, owner: "john.doe2@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'updateReview').mockResolvedValue(newReview);
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', 'This is a test review');
        formData.append('bookId', '1');

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });

        await updateReview(prevState, formData);
        expect(redirect).toHaveBeenCalledWith('/');

    });

    it('should delete a review', async () => {
        const id = 1;
        const newReview: ConfidentialReview = {
            id: 2, review: 'This is a test review',
            name: 'John Doe', bookId: 1, owner: "john.doe@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'deleteReview').mockResolvedValue(undefined);
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(newReview);

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });
        const result = await deleteReview(id);

        expect(result).toBeUndefined();
        expect(ReviewRepository.prototype.deleteReview).toHaveBeenCalledWith(id);
        expect(redirect).toHaveBeenCalledWith('/reviews/mine');
    });

    it('should redirect if deleting a review the user does not own', async () => {
        const reviewToDelete: ConfidentialReview = {
            id: 2, review: 'This is a test review',
            name: 'John Doe', bookId: 1, owner: "john.doe2@example.com"
        };
        vi.spyOn(ReviewRepository.prototype, 'deleteReview').mockResolvedValue();
        vi.spyOn(ReviewRepository.prototype, 'getReviewToEdit').mockResolvedValue(reviewToDelete);

        const formData = new FormData();
        formData.append('review', reviewToDelete.review);
        formData.append('bookId', reviewToDelete.bookId.toString());

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
            },
        });

        await deleteReview(reviewToDelete.id);
        expect(redirect).toHaveBeenCalledWith('/');

    });


    it('should redirect to home if no user details when trying to add a review', async () => {
        // Customizing the mock implementation for this specific test
        // This is required because redirect behaves differently in test from production
        // cauusing an error to be thrown by code accessing undefined object properties that cannot be reached in production
        mocks.redirect.mockImplementation(() => {
            throw new Error("Redirected");
        });

        const newReview: ConfidentialReview = { id: 2, review: 'This is a test review', name: 'John Doe', bookId: 1, owner: 'john.doe@example.com' };
        vi.spyOn(ReviewRepository.prototype, 'addReview').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', 'This is a test review');
        formData.append('bookId', '1');

        (auth as Mock).mockResolvedValue(null);

        await expect(addReview(prevState, formData)).rejects.toThrow("Redirected");

        // Restore the original implementation after the test
        mocks.redirect.mockReset();
    });


    it('should error if fails valdiation when adding a review', async () => {
        const newReview: ConfidentialReview = { id: 2, review: '', name: 'John Doe', bookId: 1, owner: 'john.doe@example.com' };
        vi.spyOn(ReviewRepository.prototype, 'addReview').mockResolvedValue(newReview);

        const prevState = {};
        const formData = new FormData();
        formData.append('review', newReview.review);
        formData.append('bookId', newReview.bookId.toString());

        (auth as Mock).mockResolvedValue({
            user: {
                email: 'john.doe@example.com',
                name: 'John Doe',
            },
        });

        const errorMessage = await addReview(prevState, formData);
        expect(errorMessage?.message).toBe('Please fill in the required fields');

    });

    it('should get reviews by book id', async () => {
        const bookId = 1;
        const page = 1;
        const limit = 10;
        const mockReviews: Review[] = [{ id: 1, review: 'Great book!', name: 'John Doe', bookId: 1 }];
        ReviewRepository.prototype.getReviewsByBookId = vi.fn().mockResolvedValue(mockReviews);

        const result = await getReviewsByBookId(bookId, page, limit);

        expect(result).toEqual(mockReviews);
        expect(ReviewRepository.prototype.getReviewsByBookId).toHaveBeenCalledWith({ bookId, page, limit });
    });

    it('should get reviews count by book id', async () => {
        const bookId = 1;
        const mockCount = 500;
        vi.spyOn(ReviewRepository.prototype, 'getReviewsByBookIdCount').mockResolvedValue(mockCount);

        const result = await getReviewsByBookIdCount(bookId);

        expect(result).toBe(mockCount);
        expect(ReviewRepository.prototype.getReviewsByBookIdCount).toHaveBeenCalledWith(bookId);
    });

    it('should get reviews by owner', async () => {
        const owner = 'test@example.com';
        const mockReviews: Review[] = [{ id: 1, review: 'Great book!', name: 'John Doe', bookId: 1 }];
        ReviewRepository.prototype.getReviewsByOwner = vi.fn().mockResolvedValue(mockReviews);

        const result = await getReviewsByOwner(owner);

        expect(result).toEqual(mockReviews);
        expect(ReviewRepository.prototype.getReviewsByOwner).toHaveBeenCalledWith(owner);
    });

});