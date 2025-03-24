'use client';

import {  useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function BookSearch() {
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        if (term && term.length > 0) {
          replace(`/books?title=${term}`);
        } else {
          replace(`/books`);
        }
      }, 300);

    return (<div className="search-bar">
          <div className="row align-items-center">
            <div className="col-auto">
              <label htmlFor="searchBooks" className="form-label">Search By Book Title</label>
            </div>
            <div className="col">
              <input id="searchBooks"  className="form-control" type="text" placeholder="book title"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }} />
            </div>
        </div>
      </div>)
}