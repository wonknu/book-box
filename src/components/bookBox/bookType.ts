
export interface BookType {
	latitude: number;
  longitude: number;
  name: string;
  image: string;
}

export interface BooksType {
  books: BookType[];
  onClick?: (book: BookType) => void;
}
