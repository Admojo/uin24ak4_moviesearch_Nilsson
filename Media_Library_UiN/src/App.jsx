import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Search from './components/Search'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import BookShelf from './components/BookShelf'
import MyBookShelf from './components/MyBookShelf'
// import SearchResultsDefault from './components/SearchResults'

function App() {

  // UseState: Holder på staten til SearchBar 
  const [query, setQuery] = useState("James Bond")
  const [content, setContent] = useState([])

  const API_URL = 'https://openlibrary.org/search.json?';

  // Async, fetch, await for å hente API data
  const searchBooks = async()=>{
    try{
      // const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const response = await fetch(`${API_URL}&title=${query}&fields=key,title,first_publish_year,author_name,cover_i,isbn&limit=16`);
      const data = await response.json();
      setContent(data)
      console.log("Dette er data fra SearchBooks:", data)
    }
    catch{
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(()=>{
    searchBooks()
    console.log("useEffect:",query)
    
  },[query])
  // console.log("App.jsx, setContent:", setContent)

  return (
    <>
    {/* Layout component brukes som wrapper, returnerer content basert på routes(dvs. URL-sti som er valgt, vil vise tilhørende component)  */}
    <Layout> 
      <Routes>
        <Route path='/' element= {<Home/>}>
          <Route index element={<BookShelf content={content} title={query}/>} />
        </Route>
        <Route path='search/*'  element= {<Search  />}>
          <Route index element={<SearchBar content={query} setQuery={setQuery} />} />
          {/* <Route /*path=':slug/'*//*element={<SearchResults content={content} title={query}/>}/> */}
        </Route>
      </Routes>
      <Routes>
        <Route path='search/' index element={<SearchResults content={content} title={query}/>}/>
      </Routes>
      <Routes>
        <Route path='/mybookshelf' index element={<MyBookShelf content={content} title={query}/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App


