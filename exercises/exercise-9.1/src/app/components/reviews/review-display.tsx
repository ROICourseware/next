'use client';

import { deleteReview } from "@/app/lib/actions/reviews/actions";
import { Review } from "@/app/lib/models/review";
import { useState } from "react";
import Modal from "@/app/components/utilities/modal";
import ReviewForm from "@/app/components/reviews/review-form";
import dynamic from 'next/dynamic';
const DynamicModal = dynamic(() => import("@/app/components/utilities/modal"));
const DynamicReviewForm = dynamic(() => import('@/app/components/reviews/review-form'));

export default function ReviewDisplay({ review, owned }: { review: Review, owned?: boolean }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (modalType: 'delete' | 'form', isOpen: boolean) => {
        if (modalType === 'delete') {
            setIsDeleteModalOpen(isOpen);
        } else if (modalType === 'form') {
            setIsModalOpen(isOpen);
        }
    };

    const reviewDelete = (id: number) => {
        deleteReview(id);
        toggleModal('delete', false);
    }

    return (
        <div className="list-group-item review-item">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="review-text">{review.review}</p>
                    <p className="review-title">{review.name}</p>
                </div>
                {owned && <div>
                    <button onClick={() => toggleModal('form', true)} className="btn btn-secondary">Edit</button>
                        <DynamicModal selector="#portal" show={isModalOpen} close={() => toggleModal('form', false)}>
                            <DynamicReviewForm review={review} />
                        </DynamicModal>
                    &nbsp;
                    <button onClick={() => toggleModal('delete', true)} className="btn btn-secondary">Delete</button>
                        <DynamicModal selector="#portal" show={isDeleteModalOpen} close={() => toggleModal('delete', false)}>
                             <p>{review.review}</p>
                            <button onClick={() => reviewDelete(review.id)} className="btn btn-danger dialog-button" type="button">Delete Review</button>
                        </DynamicModal>
                </div>}
            </div>
        </div>
    );
}

