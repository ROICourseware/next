'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export default function Menu() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function handleToggle() {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <Image
                        alt="logo"
                        src="/book-icon.svg"
                        width="30"
                        height="30"
                        style={{ backgroundColor: 'white' }}
                    />
                <Link href="/" passHref className="navbar-brand">NLBR</Link>
                <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarScroll" aria-expanded={!isCollapsed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarScroll">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" passHref className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/books" passHref className="nav-link">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" passHref className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
