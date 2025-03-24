'use client';

import { useState } from "react";
import Modal from "@/app/components/utilities/modal";

export default function ReviewCreate({ id }: { id: number }) {


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
                Review form will go here.
            </Modal>
        </>


    );
}