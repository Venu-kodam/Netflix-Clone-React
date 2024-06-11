import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Row from '../components/row'
// import Home from './Home'
// import Tvshows from './Tvshows'
// import Movies from './Movies'
// import Mylist from './Mylist'
// import Popular from './Popular'
import api from '../Apis/api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Netflixmain = () => {
  return (
    <div>
        {/* rendering the all components for building structure */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path='' element={<Home/>}/>
          <Route path='Tvshows' element={<Tvshows/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/Mylist' element={<Mylist/>}/>
          <Route path='/Popular' element={<Popular/>}/> */}
        </Routes>
        </BrowserRouter>
        <Banner/>
        <Row title='Top Trending Movies' fetchUrl={api.fetchTrending}/>
        <Row title='Top Rated Movies' fetchUrl={api.fetchTopratedMovies}/>
        <Row title='Netflix Originals' fetchUrl={api.fetchNeflixOriginals}/>
        <Row title='Comedy Movies' fetchUrl={api.fetchComedyMovies}/>
        <Row title='Romantic Movies' fetchUrl={api.fetchRomanticMovies}/>
        <Row title='Action Movies' fetchUrl={api.fetchActionMovies}/>
        <Row title='Horror Movies' fetchUrl={api.fetchHorrorMovies}/>
        <Row title='Documentaries' fetchUrl={api.fetchDocumentaries}/>
    </div>
  )
}

export default Netflixmain