import { Loading } from "@nextui-org/react";
import { set } from "ol/transform";
import { useEffect, useState } from "react"
import { Category, NavBar, ContainerPlaces } from "./components"
import { getCurrentDirection } from "./helpers/getCurrentDirection";


export const IndexApp = () => {
	const [lat, setLat] = useState(null);
	const [lon, setLng] = useState(null);
	const [status, setStatus] = useState(null);
	const [country, setCountry] = useState(null);
	const [city, setCity] = useState(null);
	const [state, setState] = useState(null);


	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus('La geolocalización no es compatible con su navegador');
		} else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition((position) => {
				
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			}, () => {
				setStatus('No se puede recuperar tu ubicación');
			});
		}
	}
	const getAddress = async () => {
		const {country,city,state} = await getCurrentDirection(lat, lon);
		console.log(country,city,state)
		setCountry(country)
		setCity(city)
		setState(state)
		setStatus(null);
	}

	useEffect(() => {
		getLocation()
	}, []);

	useEffect(() => {
		getAddress(lat,lon)
	}, [lat,lon]);
	

	if (status) {
		return (
			<>
				<Loading type="points"/>
			</>
		)
	} else {
		return (
			<>
				<NavBar/>
				<Category />
				<ContainerPlaces country={country} city={city} state={state}/>
			</>

		)
	}
}
