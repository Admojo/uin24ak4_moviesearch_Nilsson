import { Link} from "react-router-dom"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import BookCard from "./BookCard"

export default function BookCards({title}) {
    
    const [result, setResult] = useState(null)

    console.log("BookCardS title", title)

    const getBook = async() =>{
        fetch(title)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error(error));
    }

    console.log(result)

    useEffect(()=>{
        getBook()
    },[])


    return (
        <>
            <BookCard />
            <h5>BookCards</h5>
            <h3><Link to={result?.title}>{result?.title}</Link></h3>
        </>
    )
}

BookCards.propTypes = {
    title: PropTypes.string.isRequired
}