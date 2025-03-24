'use client';

import { Book } from "@/app/lib/models/book";
import useFavorites from '@/app/components/utilities/use-favorites';
import BookCard from "./book-card";


export default function BookReviews({book} :{book: Book}) {

    const { favorites } = useFavorites();

    return (<BookCard book={book} favorites={favorites} /> );

}