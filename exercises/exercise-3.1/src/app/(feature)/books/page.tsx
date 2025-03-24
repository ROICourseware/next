import Link from "next/link";


export default function Books() {
    return (
        <div className="container">
            This is the book page
            <p><Link href="/reviews/1">Reviews for book 1</Link></p>
        </div>
    );
}