import * as React from 'react';
import { Marker } from 'react-map-gl';
import { useUser } from './useUser';
import './styles.scss';
import { UserType } from './userType';

const User: React.FC<UserType> = ({
	latitude,
	longitude
}) => {
	// const { viewport, changeViewport } = useUser({
	// 	latitude: 0,
	// 	longitude: 0,
	// 	height: window.innerHeight,
	// 	width: window.innerWidth,
	// 	zoom: 14,
	// });
	// const loading = viewport.latitude === 0 || viewport.longitude === 0;

	return (
		<Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
			{/* <img src={} alt=""/> */}
		</Marker>
	);
 }

 export default User;
 