'use server';

import { Book } from "@/app/lib/models/book";
import BookRepository from "@/app/lib/repositories/book-repository";


export async function getBooksCount(): Promise<number> {
  return await new BookRepository().getBooksCount();
}

export async function getBooks(page: number, limit: number): Promise<Book[]> {
  return await new BookRepository().getBooks({ page, limit });
}

export async function getRecentBooks(): Promise<Book[]> {
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
