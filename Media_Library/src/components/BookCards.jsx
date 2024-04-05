import { Link} from "react-router-dom"
import { useEffect, useState } from "react"

export default function BookCards({name}) {

    const [result, setResult] = useState(null)

    const getEpisode = async() =>{
        fetch(name)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error(error))
    }

    console.log(result)

    useEffect(()=>{
        getEpisode()
    },[])


    return (
        <>
            <h3><Link to={result?.episode}>{result?.episode}</Link></h3>
        </>
    )
}