'use server';

import { Book } from "@/app/lib/models/book";
import BookRepository from "@/app/lib/repositories/api-book-repository";

export async function getBooks(): Promise<Book[]> {
  return await new BookRepository().getBooks();
}
