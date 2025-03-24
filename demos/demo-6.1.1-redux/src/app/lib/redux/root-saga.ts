import { all } from "redux-saga/effects";
import { watchGetFavoritesAsync, watchAddFavoriteAsync, watchDeleteFavoriteAsync } from "@/app/lib/redux/features/favorites/saga";

// Root saga that combines multiple watcher sagas
// Watcher sagas are generator functions that listen for specific actions dispatched 
// to the Redux store. When they detect an action of a specific type, they trigger 
// another saga (worker saga) to handle the side effects
export function* rootSaga() {
  yield all([
    // Watcher saga to handle fetching favorites
    watchGetFavoritesAsync(),
    // Watcher saga to handle adding a favorite
    watchAddFavoriteAsync(),
    // Watcher saga to handle deleting a favorite
    watchDeleteFavoriteAsync(),
  ]);
}