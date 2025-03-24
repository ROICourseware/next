# Redirects and Rewrites in next.config.ts

> **Note** Watch at the address bar in the two examples

### Redirect:

1. Go to http://localhost:3000/user-books
    - sent to http://localhost:3000/books/mine

### Rewrite:

2. Go to http://localhost:3000/next
    - sent to https://nextjs.org/

    > **Note** Problem from switching to HTTPS inside HTTP address: as a rewrite, it remains HTTP, and lots of resources are blocked