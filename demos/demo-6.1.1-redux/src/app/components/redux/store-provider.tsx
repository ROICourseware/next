"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/app/lib/redux/store";

// StoreProvider component to provide the Redux store to the application
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // useRef hook to create a mutable reference to the store
  const storeRef = useRef<AppStore | null>(null);

  // Initialize the store if it hasn't been created yet
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // Provide the Redux store to the application
  return <Provider store={storeRef.current}>{children}</Provider>;
};