'use server';

import { Book } from "@/app/lib/models/book";
import BookRepository from "@/app/lib/repositories/api-book-repository";

export async function getBooks(): Promise<Book[]> {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return await new BookRepository().getBooks();
}
