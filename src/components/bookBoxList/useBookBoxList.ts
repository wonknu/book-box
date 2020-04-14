import { useState, useEffect } from 'react';
// import { ViewportType } from './mapType';

export const useBookBoxList = () => {
  // const [width, setWidth] = useState<number>(0);
  // const [height, setHeight] = useState<number>(0);
  // const [latitude, setLatitude] = useState<number>(0);
  // const [longitude, setLongitude] = useState<number>(0);
  // const [zoom, setZoom] = useState<number>(0);

	// const changeViewport = (viewport: ViewportType) => {
  //   if (viewport.width) setWidth(viewport.width);
  //   if (viewport.height) setHeight(viewport.height);
  //   if (viewport.latitude) setLatitude(viewport.latitude);
  //   if (viewport.longitude) setLongitude(viewport.longitude);
  //   if (viewport.zoom) setZoom(viewport.zoom);
	// };

  // useEffect(() => {
  //   window.addEventListener('resize', () => changeViewport({
  //     height: window.innerHeight,
  //     width: window.innerWidth
  //   }));
  // }, []);

  return {
		// width,
    // height,
    // latitude,
    // longitude,
    // zoom,
    // changeViewport
  };
}
