
'use client';

import { Book } from "@/app/lib/models/book";
import { addBook, State, updateBook } from "@/app/lib/actions/books/actions";
import { useActionState } from "react";

export default function BookForm({book}: {book : Book}) {
    const bookAction = book.id === 0 ? addBook : updateBook;
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(bookAction, initialState);

    return (
        <form action={formAction} className="mt-4 row">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title </label>
                <input type="text" name="title" id="title" required className="form-control form-control-lg" placeholder="Title" defaultValue={book.title} />
                {state.errors?.title &&
                state.errors.title.map((error: string) => (
                    <p className="alert alert-danger mt-1" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author </label>
                <input type="text" id="author" name="author" required className="form-control form-control-lg" placeholder="Author" defaultValue={book.author}  />
                {state.errors?.author &&
                state.errors.author.map((error: string) => (
                    <p className="alert alert-danger mt-1" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            <input type="hidden" name="id" value={book.id} />
            <input type="hidden" name="cover" value={book.cover} />
            <button type="submit" className="btn btn-secondary col-2">{book.id === 0 ? 'Add' : 'Update'} Book</button>
            {state.message && <p className="mt-3 alert alert-danger">{state.message}</p>}
        </form>
    );
}
