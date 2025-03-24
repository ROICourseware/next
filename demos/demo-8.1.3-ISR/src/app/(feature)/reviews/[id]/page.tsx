
import BookReviews from "@/app/components/books/book-reviews";
import { getAllBooks, getBook } from "@/app/lib/actions/books/actions";
import { Book } from "@/app/lib/models/book";

export const revalidate = 60;
export const dynamicParams = true;
 
export async function generateStaticParams() {
  const books: Book[] = await getAllBooks();
  return books.map((book) => ({
    id: String(book.id),
  }))
}

export default async function Reviews(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;
    const bookId = parseInt(params.id);
    const book = await getBook(bookId);


    return (
        <div>
            <div style={{ float: 'left', marginRight: '1rem' }}>
              <BookReviews book={book} />
            </div>
        </div>
    );
}