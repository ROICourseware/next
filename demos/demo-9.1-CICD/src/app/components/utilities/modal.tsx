'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
    children,
    show,
    close,
    selector,
}: {
    children: ReactNode;
    show: boolean;
    close: () => void;
    selector: string;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) {
        return null;
    }

    const root = typeof document !== 'undefined' ? document.querySelector(selector) : null;

    if (!root || !show) {
        return null;
    }

    return createPortal(
        <div className="custom-dialog-container">
            <dialog open={show} className="custom-dialog">
                <button onClick={close} className="close-button">X</button>
                <div className="modal-body">
                    {children}
                </div>
            </dialog>
        </div>,
        root
    );
}