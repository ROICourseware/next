'use server';

import { Book } from "@/app/lib/models/book";
import BookRepository from "@/app/lib/repositories/api-book-repository";

export async function getBooks() {
  // The repostiory returns a ConfidentialBook in an array
  return await new BookRepository().getBook(66);
  
  // comment the previous line and uncomment the next
  // which returns Book not ConfidentialBook objects
  // and the page will display without an error

 // return await new BookRepository().getBooks();
}
