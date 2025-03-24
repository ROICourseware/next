    
## Using SWR and React Query for Client-Side Data Access

The Home page now includes the BooksAll component, that uses SWR on the client for data access.

The Books page uses React Query and client-side data access.


> **Note**: In a real-world application, only one of SWR or React Query would typically be used.

### Files

#### SWR - navigate to the home page
- `app/components/books/books-all.tsx`
- `app/page.tsx`

#### React Query - navigate to Books
- `app/components/books/query-provider.tsx`
    - Wraps `BookCardList` with `QueryClientProvider`
- `app/components/books/book-card-list.tsx`
    - Uses React Query to retrieve books
- `app/(feature)/books/page.tsx`
    - includes `BooksProvider`, not `BookCardList`
    
