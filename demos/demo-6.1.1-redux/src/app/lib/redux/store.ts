import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import favoritesReducer from "@/app/lib/redux/features/favorites/slice";
import { rootSaga } from '@/app/lib/redux/root-saga';

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    reducer: {
      favorites: favoritesReducer,
    },
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];