## Streaming From APIs

> **Note:** Run `npm i` in both client and server 

### Next.js Application
- **API Endpoint**: `app/api/reviews`
  - **Files**:
    - `reviews.json`: A large JSON file used as the data source.
    - `route.ts`: Streams the contents of `reviews.json` to the client.
      - Includes artificial delays to simulate slow stream reading.

### Client Application
- **Steps to Run**:
  1. Ensure Next app is running, and then start the client application using `npm start`.
  2. Open your browser and navigate to [http://localhost:8080](http://localhost:8080).
  3. The page will read the stream from the API and display the data.
