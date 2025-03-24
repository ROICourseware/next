'use server';

import { Book, ConfidentialBook } from "@/app/lib/models/book";
import BookRepository from "@/app/lib/repositories/api-book-repository";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
    author?: string[];
    cover?: string[];
  }
  message?: string | null;
};

const addFormSchema = z.object({
  title: z.string().min(1, { message: 'Title must be at least 1 character long.' }),
  author: z.string().min(1, { message: 'Author must be at least 1 character long.' }),
  cover: z.string().optional(),
});

async function validate(formData: FormData) {
  return addFormSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    cover: formData.get("cover")
  });
}

async function checkUser() {
  const session = await auth();
  if (!session?.user?.email) {
      redirect('/');
  }
  return session.user.email;
}

export async function addBook(prevState: State, formData: FormData) {
  const email = await checkUser();

  const validatedData = await validate(formData);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Please fill in the required fields."
    };
  };

  const book: ConfidentialBook = {
    title: validatedData.data.title,
    author: validatedData.data.author,
    cover: validatedData.data.cover,
    id: 0,
    owner: email
  };

  const id = await new BookRepository().addBook(book);
  redirect(`/reviews/${id}`);
}

export async function updateBook(prevState: State, formData: FormData) {
  const email  = await checkUser();
  const validatedData = await validate(formData);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Please fill in the required fields."
    };
  };

  const repo = new BookRepository();
  const confidentialBook = await repo.getBookToEdit(parseInt(formData.get("id") as string, 10));
  if (email !== confidentialBook.owner) {
    redirect('/');
  }

  confidentialBook.title = validatedData.data.title;
  confidentialBook.author = validatedData.data.author;
  confidentialBook.cover = validatedData.data.cover;
  await repo.updateBook(confidentialBook);

  redirect(`/reviews/${confidentialBook.id}`);
}


export async function deleteBook(id: number) {
  const email  = await checkUser();
  const repo = new BookRepository();
  const confidentialBook = await repo.getBookToEdit(id);
  if (email !== confidentialBook.owner) {
    redirect('/');
  }
  await repo.deleteBook(id);
  redirect('/books/mine');
}


export async function getBooksCount(): Promise<number> {
  return await new BookRepository().getBooksCount();
}

export async function getBooks(page: number, limit: number): Promise<Book[]> {
  return await new BookRepository().getBooks({ page, limit });
}

export async function getRecentBooks() : Promise<Book[]>  {
  return await new BookRepository().getRecent();
}


export async function searchBooksCount(title: string): Promise<number> {
  return await new BookRepository().searchBooksCount(title);
}

export async function searchBooks(title: string, page: number, limit: number): Promise<Book[]> {
  return await new BookRepository().searchBooks({ query: title, page, limit });
}

export async function getBook(id: number): Promise<Book> {
  return await new BookRepository().getBook(id);
}

export async function getBooksByOwner(owner: string): Promise<Book[]> {
  return await new BookRepository().getBooksByOwner(owner);
}