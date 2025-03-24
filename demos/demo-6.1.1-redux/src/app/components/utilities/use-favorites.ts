import { getFavoritesAsyncRequest } from '@/app/lib/redux/features/favorites/saga';
import { selectFavorites } from '@/app/lib/redux/features/favorites/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useFavorites() {

    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!favorites.length) {
        // Dispatch the action to fetch favorites if the favorites array is empty
        // This ensures that the favorites are loaded when the component mounts
            dispatch({ type: getFavoritesAsyncRequest });
        }
    }, [dispatch, favorites]);

    return favorites;

}