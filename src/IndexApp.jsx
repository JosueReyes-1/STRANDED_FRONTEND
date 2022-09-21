import { useEffect, useState } from "react"
import { Category, NavBar, ContainerPlaces } from "./components"
import { getCurrentDirection } from "./helpers/getCurrentDirection";


export const IndexApp = () => {
	const [lat, setLat] = useState(null);
	const [lon, setLng] = useState(null);
	const [status, setStatus] = useState(null);
	const [direccion, setDireccion] = useState(null)

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus('La geolocalización no es compatible con su navegador');
		} else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition((position) => {
				setStatus(null);
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			}, () => {
				setStatus('No se puede recuperar tu ubicación');
			});
		}
	}

	const getAddress = async () => {
		const newAddress = await getCurrentDirection(lat, lon);
		setDireccion(newAddress)
	}

	useEffect(() => {
		getLocation()
		getAddress(lat,lon)
		
	}, []);


	// https://nominatim.openstreetmap.org/reverse?format=json&lat=21.508995587888542&lon=-104.92223718096996
	if (status) {
		return (
			<>
				<h1>hola</h1>
			</>
		)
	} else {
		return (
			<>
				<NavBar />
				<Category />
				<ContainerPlaces />
				<h1>{lat}</h1>
				<h1>{lon}</h1>
				<h1>{direccion}</h1>
			</>

		)
	}
}
