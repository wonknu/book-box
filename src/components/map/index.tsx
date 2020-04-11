import * as React from 'react';
import ReactMapGL, { NavigationControl, Viewport, ViewStateChangeInfo } from 'react-map-gl';
import { useMap } from './useMap';
import './styles.scss';

const Map: React.FC = () => {
	const { viewport, changeViewport } = useMap({
		latitude: 0,
		longitude: 0,
		height: window.innerHeight,
		width: window.innerWidth,
		zoom: 14,
	});
	const loading = viewport.latitude === 0 || viewport.longitude === 0;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			changeViewport({
				...viewport,
				latitude,
				longitude
			})
		});
	}

	return (
		<>
			{loading ?
				'loading' : 
				<ReactMapGL
					{...viewport}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={(updatedViewport: Viewport) => changeViewport(updatedViewport)} >
					
					<div style={{ position: 'absolute', right: 30, bottom: 30 }}>
						<NavigationControl 
							onViewportChange={(updatedViewport: Viewport) => changeViewport(updatedViewport)}
							onViewStateChange={(v: ViewStateChangeInfo) => console.log(v)}
						/>
					</div>
				</ReactMapGL>
			}
		</>
	);
 }

 export default Map;
 