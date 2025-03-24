import BookForm from "@/app/components/books/book-form";
import { Book } from "@/app/lib/models/book";

export default async function CreateBook() {

    const book: Book = {
        title: '',
        author: '',
        cover: '',
        id: 0
    }

    return (
        <div>
           <BookForm book={book} />
        </div>
    );
}
