
export interface BookType {
	latitude: number;
  longitude: number;
  name: string;
  image: string;
  onClickBook?: (book: BookType) => void;
}

export interface BooksType {
  books: BookType[];
  onClick?: (book: BookType) => void;
}
