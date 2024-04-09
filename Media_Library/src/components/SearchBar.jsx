import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import SearchResults from "./SearchResults"

// Props som sendes videre: content, setQuery, setCurrentId
export default function SearchBar({query, setQuery}){


    const [search, setSearch] = useState("")
    
    // useEffect(() => {
        
    // })


    const handleSubmit = (e)=>{
        e.preventDefault() // .preventDefalut skal i utg.pkt forhindre at et søk gjøres simultant med "input" fra bruker i felt
        setQuery(search)
       
    }
    console.log("handleSubmit", search)

    const handleChange = (event)=>{
        // event() //Lagt til event.prevetnDefault - Mulig det er nødvendig med .preventDefault her?
        setSearch(event.target.value)
    }

    const handleClick = (search)=>{
      console.log(search)
    }
    console.log("handleClick:", search)
   

    
    return(
        <>
            {/* <h1>Book search</h1> */}
            <form className="SearchBar" onSubmit={handleSubmit}>
                <label htmlFor="search"> <h3>Search books   </h3></label>
                <input type="text" id="search" placeholder="Write book title.." onChange={handleChange}></input>
                <input type="submit" value="Search"></input>
            </form>

            <ul className="category-list">
                {/* {content?.map(item => 
                <li key={item.id}>
                    <Link to={item.name} onClick={()=>handleClick(item.id)}>{item.name}</Link>
                </li>)} */}
                {query?.map(book => <li key={book._version_}><Link to={book.title} onClick={()=>handleClick(book._version_)}>{book.title}</Link></li>)}
            </ul>
            {/* <SearchResults></SearchResults> */}
        </>
    )
}