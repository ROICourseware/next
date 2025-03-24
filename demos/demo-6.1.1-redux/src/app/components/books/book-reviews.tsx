'use client';

import { Book } from "@/app/lib/models/book";
import BookCard from "./book-card";
import useFavorites from "../utilities/use-favorites";

export default function BookReviews({book} :{book: Book}) {

 const favorites = useFavorites();

    return (<BookCard book={book} favorites={favorites} /> );

}