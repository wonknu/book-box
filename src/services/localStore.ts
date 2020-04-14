import { BookType } from "../components/bookBox/bookType";

const BOOKS_STORAGE_KEY = 'BOOKS_STORAGE_KEY';

export const localStore = {
  getBooks: (): BookType[] => {
    const storage = localStorage.getItem(BOOKS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  },

  setBooks: (books: BookType[]) => {
    const storage = localStorage.getItem(BOOKS_STORAGE_KEY);
    let all: BookType[] = storage ? books.concat(JSON.parse(storage)) : books;
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(Array.from(new Set(books))));
  },
};
