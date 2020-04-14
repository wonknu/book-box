import { useState, useEffect } from 'react';
import { BookType } from './bookType';
import { localStore } from '../../services/localStore';

export const useBookBox = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    setBooks(localStore.getBooks());
    return () => {};
  }, []);

  return {
    books
  };
}
