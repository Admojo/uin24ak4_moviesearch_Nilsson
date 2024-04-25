import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

// Props som sendes videre: content, setQuery, setCurrentId
export default function SearchBar({query, setQuery}){

    const [search, setSearch] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault() // .preventDefalut skal i utg.pkt forhindre at et søk gjøres simultant med "input" fra bruker i felt
        setQuery(search)
        console.log("handleSubmit:", search)
    }
    
    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (search)=>{
      console.log("handleClick: ", search)
    }
    
    return(
        <>
            <h1>LIBRARY</h1>
            <form className="search-bar" onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="text" className="input" placeholder="Search for books.." onChange={handleChange}></input>
                <input type="submit" className="button-50" role="button" value="Search"></input>
            </form>
            {/* {setQuery == null ? <h3> Populære nå </h3> : <h3> Search results for: {search} </h3>  } */}
                <ul /*className="category-list"*/> 
                    {query?.map((book)=> 
                        <li key={book._version_}>
                         {/* <Link to={book.title} onClick={()=>handleClick(book._version_)}> {book.title} </Link> */}
                            <Link to={'/book/${book._version_}'} onClick={()=>handleClick(book._version_)}> {book.title} </Link>
                        </li>)
                }
                </ul>
            {/* <SearchResults></SearchResults> */}
        </>
    )
}

// Må definere props, fordi det er lagt inn som dependencies og skal alltid valideres
SearchBar.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func
    }