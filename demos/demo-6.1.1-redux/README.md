## Redux, Redux Toolkit, Saga, and Reselect

If running this demo in a new or remote machine, ensure the Redux Dev Tools are installed in Chrome.

### Files Overview

#### Hook calling dispatch to retrieve favorites
- **Hook**: `app/components/utilities/useFavorites`
- **Used in**:
  - `app/components/books/book-card-list.tsx`
  - `app/components/books/favorites.tsx`
  - `app/components/books/book-reviews.tsx`

#### Component calling dispatch to set favorites
- **Component**: `app/components/books/book-card.tsx`

#### Provider Component
- **Provider**: `components/redux/store-provider.tsx`
- **Usage**: `app/layout.tsx` (wraps the application with the provider)

#### Redux Configuration
- `lib/redux/saga.ts`
- `lib/redux/hook.ts`
- `lib/redux/store.ts`

#### Redux Implementation for Favorites
- **Slice**: `lib/redux/features/favorites/slice.ts`
- **Saga**: `lib/redux/features/favorites/saga.ts`
- **Selectors**: `lib/redux/features/favorites/selectors.ts`