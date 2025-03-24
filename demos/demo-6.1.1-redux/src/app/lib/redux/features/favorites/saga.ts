import { put, takeEvery, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getData, updateData } from '@/app/lib/utilities/db';
import { Book } from "@/app/lib/models/book";
import {
  initializeFavoritesStart,
  initializeFavoritesSuccess,
  initializeFavoritesFailure,
  addFavoriteStart,
  addFavoriteSuccess,
  addFavoriteFailure,
  deleteFavoriteStart,
  deleteFavoriteSuccess,
  deleteFavoriteFailure,
} from './slice';

// Action types for async requests
export const getFavoritesAsyncRequest = "favorites/getFavoritesAsyncRequest";
export const addFavoriteAsyncRequest = "favorites/addFavoriteAsyncRequest";
export const deleteFavoriteAsyncRequest = "favorites/deleteFavoriteAsyncRequest";

// Saga to handle fetching favorites
function* getFavoritesAsync() {
  try {
    // Dispatch action to set status to 'loading'
    yield put(initializeFavoritesStart());
    // Call getData to fetch favorites from the database
    const favorites: Book[] = yield call(getData, 'favorites');
    // Dispatch action to set favorites and status to 'succeeded'
    yield put(initializeFavoritesSuccess(favorites));
  } catch (error) {
    // Dispatch action to set status to 'failed' and store the error message
    if (error instanceof Error) {
      yield put(initializeFavoritesFailure(error.message));
    } else {
      yield put(initializeFavoritesFailure("An unknown error occurred"));
    }
  }
}

// Saga to handle adding a favorite
function* addFavoriteAsync(action: PayloadAction<Book>) {
  try {
    // Dispatch action to set status to 'loading'
    yield put(addFavoriteStart());
    // Call updateData to add the favorite to the database
    yield call(updateData, 'favorites', action.payload, true);
    // Dispatch action to add the favorite and set status to 'succeeded'
    yield put(addFavoriteSuccess(action.payload));
  } catch (error) {
    // Dispatch action to set status to 'failed' and store the error message
    if (error instanceof Error) {
      yield put(addFavoriteFailure(error.message));
    } else {
      yield put(addFavoriteFailure("An unknown error occurred"));
    }
  }
}

// Saga to handle deleting a favorite
function* deleteFavoriteAsync(action: PayloadAction<Book>) {
  try {
    // Dispatch action to set status to 'loading'
    yield put(deleteFavoriteStart());
    // Call updateData to remove the favorite from the database
    yield call(updateData, 'favorites', action.payload, false);
    // Dispatch action to remove the favorite and set status to 'succeeded'
    yield put(deleteFavoriteSuccess(action.payload));
  } catch (error) {
    // Dispatch action to set status to 'failed' and store the error message
    if (error instanceof Error) {
      yield put(deleteFavoriteFailure(error.message));
    } else {
      yield put(deleteFavoriteFailure("An unknown error occurred"));
    }
  }
}

// Watcher saga to listen for getFavoritesAsyncRequest actions
export function* watchGetFavoritesAsync() {
  yield takeEvery(getFavoritesAsyncRequest, getFavoritesAsync);
}

// Watcher saga to listen for addFavoriteAsyncRequest actions
export function* watchAddFavoriteAsync() {
  yield takeEvery(addFavoriteAsyncRequest, addFavoriteAsync);
}

// Watcher saga to listen for deleteFavoriteAsyncRequest actions
export function* watchDeleteFavoriteAsync() {
  yield takeEvery(deleteFavoriteAsyncRequest, deleteFavoriteAsync);
}