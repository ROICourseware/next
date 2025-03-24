import { Book } from "@/app/lib/models/book";
import { getData } from "@/app/lib/utilities/db";
import { useEffect, useState } from "react";


export default function useFavorites() {

    const [favorites, setFavorites] = useState<Book[]>([]);

    const fetchFavorites = async () => {
        const favs = await getData('favorites');
        setFavorites(favs || []);
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return { favorites, fetchFavorites };

}