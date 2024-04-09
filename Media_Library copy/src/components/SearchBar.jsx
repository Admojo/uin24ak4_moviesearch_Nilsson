import { useState } from "react"
import { Link } from "react-router-dom"
import SearchResults from "./SearchResults"

// Props som sendes videre: content, setQuery, setCurrentId
export default function SearchBar({content, setQuery, setCurrentId}){
    const [search, setSearch] = useState("")
    

    const handleSubmit = (e)=>{
        e.preventDefault() // .preventDefalut skal i utg.pkt forhindre at et søk gjøres simultant med "input" fra bruker i felt
        setQuery(search)
    }

    const handleChange = (event)=>{
        event() //Lagt til event.prevetnDefault - Mulig det er nødvendig med .preventDefault her?
        setSearch(event.target.value)
    }

    const handleClick = (title)=>{
        setCurrentId(title)
        localStorage.setItem("ID", title)
    }
    console.log("Search", content)
    
    return(
        <>
            <h1>Book search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search title: </label>
                <input type="text" id="search" placeholder="Write book title.." onChange={handleChange}></input>
                <input type="submit" value="Search"></input>
            </form>
            <ul className="category-list">
                {content?.map(item => 
                <li key={item.id}>
                    <Link to={item.name} onClick={()=>handleClick(item.id)}>{item.name}</Link>
                </li>)}
            </ul>
            <SearchResults></SearchResults>
        </>
    )
}