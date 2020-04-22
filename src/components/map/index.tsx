import * as React from 'react';
import ReactMapGL, { NavigationControl, ViewStateChangeInfo, GeolocateControl, ViewportProps } from 'react-map-gl';
// import { useLoader } from '../loader/LoadingContext';
import { useMap } from './useMap';
import Loader from "../loader";
import BookBox from '../bookBox';
import { useBookBox } from '../bookBox/useBookBox';

import './styles.scss';
import LoadingContext from '../loader/LoadingContext';

const geolocateStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

const Map: React.FC = (props) => {
	const { 
		width,
    height,
    latitude,
    longitude,
    zoom,
    changeViewport
  } = useMap();

  const { loading, setLoading } = React.useContext(LoadingContext);
  const { books } = useBookBox();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        if (loading) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          changeViewport({
            latitude,
            longitude,
            height: window.innerHeight - 39, // 39 = header height
            width: window.innerWidth,
            zoom: 14,
          });
        }
      });
    }
  }, [loading]);

  if (loading) return <Loader />;

	return (
    <ReactMapGL
      width={width}
      height={height}
      latitude={latitude}
      longitude={longitude}
      zoom={zoom}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/lanigram/ck8x3ytxx3vs31ipa06uo9tik"
      onViewportChange={(updatedViewport: ViewportProps) => changeViewport(updatedViewport)} >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        showUserLocation={true}
      />
      <BookBox books={books}/>
      <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
        <NavigationControl 
          onViewportChange={(updatedViewport: ViewportProps) => changeViewport(updatedViewport)}
          onViewStateChange={(v: ViewStateChangeInfo) => console.log(v)}
        />
      </div>
    </ReactMapGL>
	);
 }

 export default Map;
