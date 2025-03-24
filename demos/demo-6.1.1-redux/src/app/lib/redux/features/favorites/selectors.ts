import { createSelector } from 'reselect';
import { RootState } from "@/app/lib/redux/store";
import { Book } from "@/app/lib/models/book";

// Basic selector to get the favorites array from the state
const selectFavoritesState = (state: RootState): Book[] => state.favorites.value;

// Memoized selector to get the sorted favorites
// avoids unnecessary re-renders caused by selectors returning new references
export const selectFavorites = createSelector(
  [selectFavoritesState],
  (favorites) => {
    return [...favorites].sort((a, b) => a.title.localeCompare(b.title));
  }
);