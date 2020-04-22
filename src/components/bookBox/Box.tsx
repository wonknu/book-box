import * as React from 'react';

import { ReactComponent as Pin } from '../../assets/icons/book-shop.svg';

import './styles.scss';
import { BookType } from './bookType';
import ModalContext from '../modal/ModalContext';


type BookState = {
  on: boolean
}

const Test = () => {
  return (
    <div>Modal bitches</div>
  )
}

class Box extends React.Component<BookType, BookState> {

  constructor(props: BookType) {
    super(props);
    this.state = { on: false };
  }

  render() {
    const { latitude, longitude, name, image, onClickBook } = this.props;
    const { on } = this.state;

    const handleClick = () => {
      if (!on) {
        this.setState({on: !on});
      }
      if (onClickBook) {
        onClickBook(this.props);
      }
    }

    return (
      <div className={`marker-wrapper ${on ? 'on' : ''}`} onClick={handleClick}>
        <ModalContext.Consumer>
          {({ showModal }) => (
            <button onClick={() => showModal(Test() as Element, { isOpen: true })}>Open Modal</button>
          )}
        </ModalContext.Consumer>
          <Pin className="icon-home" />
          <div className="mapboxgl-marker mapboxgl-user-location-dot" ></div>
      </div>
    )
  }
};
 
 export default Box;
 