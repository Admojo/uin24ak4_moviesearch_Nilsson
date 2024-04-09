import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Search from '../../Media_Library/src/components/Search'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

function App() {

  // UseState: Holder på staten til SearchBar 
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("James Bond")
  const [currentId, setCurrentId] = useState("")

  const API_URL = 'https://openlibrary.org/search.json?';

 

  // Async, fetch, await for å hente API data
  const searchBooks = async()=>{
    try{
      // const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const response = await fetch(`${API_URL}&title=${query}`);
      const data = await response.json();
      console.log("Dette er data 1:", data)
      setContent(data.docs.map(book => book.title));
      // setContent(data)
      console.log("Dette er data:", data)
     
      // console.log(response)

    }
    catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    searchBooks()
    
  
  },[query])

  console.log("Current Id:", currentId)
  console.log("content", content)

  // Hver Route fører til en ny "html-side" men istedet for å sende til ny htmlside, oppdateres UI-elementer, 
  // basert på hvilken komponent som det refereres til og dets innhold.
  // Route inneholder elementer som vises, basert på plassering i URL-path(path = ' '). 
  
  return (
    <>
    {/* Layout component brukes som wrapper, returnerer content basert på routes(dvs. URL-sti som er valgt, vil vise tilhørende component)  */}
    <Layout> 
      <Routes>
        <Route path='/' index element= {<Home  />} />

        {/* Nested Routes: path=search med compo. <Search/> har underordnede components: 
                          Searchbar er index element og vil alltid vises
                          <SearchResults> vil vise innhold basert på :slug */}
        <Route path='search/' element={<Search />} >
            <Route index element={ <SearchBar content={content} setQuery={setQuery} setCurrentId={setCurrentId} /> } />
            <Route path=':slug' element={<SearchResults />} />
        </Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App


