'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookCardList from './book-card-list';

const queryClient = new QueryClient();

export default function BooksProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookCardList />
    </QueryClientProvider>
  );
};

