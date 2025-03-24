'use client';

import ReviewForm from "./review-form";
import { Review } from "@/app/lib/models/review";
import { useState } from "react";
import Modal from "@/app/components/utilities/modal";

export default function ReviewCreate({ id }: { id: number }) {

    const review: Review = {
        bookId: id,
        name: '',
        review: '',
        id: 0
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDialog = () => {
        setIsModalOpen(true);
    };

    const closeDialog = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <button onClick={openDialog} className="btn btn-secondary">Review Ths Book</button>
            <Modal show={isModalOpen} close={closeDialog} selector="#portal">
                <ReviewForm review={review} />
            </Modal>
        </>

    );
}