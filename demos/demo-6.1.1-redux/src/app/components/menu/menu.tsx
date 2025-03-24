'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import SignIn from '@/app/components/users/sign-in';
import { useSession } from 'next-auth/react';
import SignOut from '@/app/components/users/sign-out';

export default function Menu() {
    const { data: session } = useSession();
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
                        <li className="nav-item">
                            <Link href="/books/favorites" passHref className="nav-link">My Favorites</Link>
                        </li>
                        {session?.user &&
                            <>
                                <li className="nav-item">
                                    <Link href="/books/create" passHref className="nav-link">Add Book</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/books/mine" passHref className="nav-link">My Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/reviews/mine" passHref className="nav-link">My Reviews</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className="ms-auto">
                    {!session?.user ? <SignIn /> : <SignOut />}
                </div>
            </div>
        </nav>
    );
}
