

export const getPlaces = async (state='') => {
    console.log(state)
    const url=`http://127.0.0.1:8000/api/place/?country=Mexico`


    const resp = await fetch(url)

    const place= await resp.json()

    
    return place
  
}
