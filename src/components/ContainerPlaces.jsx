
import { CardPlaces } from "./CardPlaces";
import '../css/ContainerPlaces.css'
import { useEffect, useState } from "react";
import { getPlaces } from "../helpers/getPlaces";


export const ContainerPlaces = ({ country, city, state }) => {
    const [place, setPlace] = useState([])

    const getlistPlaces = async () => {
        const newplaces = await getPlaces(country, city, state)
        console.log(newplaces)
        setPlace(newplaces)
    }

    useEffect(() => {
        getlistPlaces()
    }, [state])

    return (
        <>
            <div className="container_places rounded">
                {place.map((data) => (
                    <CardPlaces key={data.pk}{...data}/>
                ))}
            </div>

        </>
    )
}
