import React, { useState } from 'react'
import MovieList from './MovieList'
import Navsb from './Navsb'

  function App() {
    const [search,setSearch]=useState("")
    return (
      <div>
        <Navsb setSearch={setSearch}/>
        <MovieList search={search} />
      </div>
    )
  }
  
  export default App
