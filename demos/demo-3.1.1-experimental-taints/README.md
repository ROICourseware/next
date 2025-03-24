## Experimental Taints

In this demo, actions and components are not explicit about types, the kind of programming that makes errors more likely to occur.

### Key Points

1. **Configuration**  
   - File: `next.config.ts`  
   - The following configuration has been added:
   `  experimental: {
       taint: true,
      },`

1. **Repository**  
   - File: `lib/repositories/api-book-repository.ts`  
   - The `getBook()` method in the repository returns a `ConfidentialBook` in an array.  
      - The object contains data that should never be sent to the client
   - The `Book` object and its `owner` property are tainted.

1. **Action Issue**  
   - File: `lib/actions/books/actions.ts`  
   - The action has been modified to call `getBook()` without specifying a return type.

1. **Component Issue**  
   - The `BookCard` component is set to display the tainted object and property.  
   - The `BookCardList` component passes the tainted data through to `BookCard`.

1. **Resulting Error**  
   - Start the application and navigate to the Books page. The following error occurs:  
     `[ Server ] Error: Do not pass tokens to the client`

1. **Solution**  
   - The action should return `Book` objects, not `ConfidentialBook`.  
   - Comment out the current return and uncomment the safe alternative.
   - The page should display correctly.

