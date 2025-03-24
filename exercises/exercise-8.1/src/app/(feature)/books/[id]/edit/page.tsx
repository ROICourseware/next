import BookForm from "@/app/components/books/book-form";
import { getBook } from "@/app/lib/actions/books/actions";

export default async function EditBook(props: {
    params: Promise<{ id: string }>
}) {
    const params = await props.params;
    const book = await getBook(parseInt(params.id, 10));

    return (
        <div>
           <BookForm book={book} />
        </div>
    );
}
