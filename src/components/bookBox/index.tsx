import * as React from 'react';
import { Marker } from 'react-map-gl';

import './styles.scss';
import { BooksType, BookType } from './bookType';
import Box from './Box';

class BookBox extends React.Component<BooksType> {

  render() {
    const { books, onClick } = this.props;
    const onClickMarker = (book: BookType) => {
      if (onClick) onClick(book);
    };

    return books.map((book, index) => {
      return (
        <Marker className="marker" key={`marker-${index}`} longitude={book.longitude} latitude={book.latitude}>
          <Box {...book} onClickBook={() => onClickMarker}/>
        </Marker>
      )
    });
  }
 };

export default BookBox;
