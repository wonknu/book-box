import * as React from 'react';
import { Marker } from 'react-map-gl';

import './styles.scss';
import { BooksType, BookType } from './bookType';

import { ReactComponent as Pin } from '../../assets/icons/book-shop.svg';

class BookBox extends React.Component<BooksType> {

  static defaultProps: BooksType = {
    books: []
  }

  render() {
    const { books, onClick } = this.props;
    const onClickMarker = (book: BookType) => {
      if (onClick) onClick(book);
    };

    return books.map((book, index) => {
      return (
        <Marker className="marker" key={`marker-${index}`} longitude={book.longitude} latitude={book.latitude}>
          <Pin className="icon-home" onClick={() => onClickMarker(book)} />
        </Marker>
      )
    });
  }
 };

export default BookBox;
