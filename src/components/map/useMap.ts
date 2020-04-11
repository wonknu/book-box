import { useState, useEffect } from 'react';
import { ViewportType } from './mapType';
import { Viewport } from 'react-map-gl';

export const useMap = ({
	latitude,
	longitude,
	zoom,
	height,
	width
}: ViewportType) => {
  const [viewport, setViewport] = useState<ViewportType>({
    latitude: latitude,
    longitude: longitude,
    height: height,
    width: width,
    zoom: zoom,
	});
	
	const changeViewport = (newViewport: Viewport) => {
		setViewport({
			...newViewport,
			height: window.innerHeight,
			width: window.innerWidth,
    });
	};

  useEffect(() => {
    window.addEventListener('resize', () => changeViewport(viewport));
  }, []);

  return {
		viewport,
		changeViewport,
  };
}
