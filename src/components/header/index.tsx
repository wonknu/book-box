import * as React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';
import LoadingContext from '../loader/LoadingContext';
import { useHeader } from './useHeader';

const Header: React.FC = () => {
  const { loading } = React.useContext(LoadingContext);
  const { tabActive, setTabActive } = useHeader('map');

  if (loading) return null;

  const onClickTab = (current: string) => setTabActive(current);

	return (
    <div className="header">
      <div>
        <Link to={'/'} onClick={() => onClickTab('map')} className={tabActive === 'map' ? 'on' : ''}>
          Map
        </Link>
      </div>
      <div>
        <Link to={'/list'} onClick={() => onClickTab('list')} className={tabActive === 'list' ? 'on' : ''}>
          List
        </Link>
      </div>
    </div>
	);
 }

 export default Header;
