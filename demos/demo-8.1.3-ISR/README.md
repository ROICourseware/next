# ISR / Pre-Generated Dynamic Routes

## Changes:

1. `src/app/(feature)/reviews/id/page.tsx`
   - Modifed to use generateStaticParams for the book being reviewed
   - Reviews were removed from the page to simplify the example.
1. `src/app/lib/repositories/api-book-repository.ts  and book-repostiory.ts`
    - new methods added to return all books to facilitate pre-generation of params
1. `src/app/lib/actions/books/actions.ts`
    - new methods added to return all books to facilitate pre-generation of params

## Steps

1. run `npm build` 
1. Examine the output
> **Note** the following in the terminal:

    ● /reviews/[id]                        287 B           117 kB
    ├   ├ /reviews/67
    ├   ├ /reviews/66
    ├   ├ /reviews/65
    ├   └ [+62 more paths]
    └ ƒ /reviews/mine                        1.48 kB         107 kB

    ●  (SSG)      prerendered as static HTML (uses generateStaticParams)

1. Find the pre-generated files inside `.next/server/app/reviews`
