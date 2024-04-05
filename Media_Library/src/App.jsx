import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'


import { useEffect, useState } from 'react'
import Search from './components/Search'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

function App() {

  // UseState: Holder på staten til SearchBar 
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("James Bond")
  const [currentId, setCurrentId] = useState("")


  // Async, fetch, await for å hente API data
  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      // setContent(data.results)
      setContent(data.docs.map(book => book.title))
      // setContent(data)

      console.log(data)
      console.log(response)

    }
    catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    getData()
  
  },[query])


  // Hver Route fører til en ny "html-side" men istedet for å sende til ny htmlside, oppdateres UI-elementer, 
  // basert på hvilken komponent som det refereres til og dets innhold.
  // Det kan defineres en path=som definerer URL-sti som skal opprettes
  return (
    <>
    <Layout>
      <Routes>
        {/* Home Inneholder: skriver ut innholdet, basert på parameter: {query} -> {book.title} */}
        <Route path='/' index element= {<Home  />} />
        
        <Route path='search/*' element={<Search />} >
            <Route index element={ <SearchBar content={content} setQuery={setQuery} setCurrentId={setCurrentId} /> } />
            <Route path=':slug' element={<SearchResults />} />

        </Route>
        {/* <Route>
          <Route path=':slug' element={<SearchResults />} /> 
        </Route> */}
      </Routes>
    </Layout>
    </>
  )
}

export default App


