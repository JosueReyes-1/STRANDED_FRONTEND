
export const getCurrentDirection = async (lat,lon) => {
    const baseURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    const resp=await fetch(baseURL)
    const {address} =await resp.json();
    
    const {country,city,state} = address

    return {
        country,
        city,
        state,
    }

}
