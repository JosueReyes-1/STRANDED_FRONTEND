
export const getCurrentDirection = async (lat,lon) => {
    const baseURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

    const resp=await fetch(baseURL)

    const {address} =await resp.json();

    return address

}
