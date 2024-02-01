import React from 'react'
import { useGlobalContext } from '../context/AppContext'

import Movies from '../components/Movies'
import { NavLink } from 'react-router-dom'
const Home = () => {

    const{movies , loading} = useGlobalContext();
  return (
    <div className=''>
      {loading ? (
        <p className='text-red-700 '>Loading...</p>                                                                                                           
      ) : movies.length > 0 ? (
       
        <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          
          {movies.map((movie) => (
           <NavLink to = {`/movie/${movie.show.id}`} className=''>
            <Movies key={movie.show.id} movie={movie} />
            </NavLink>
          ))}
        </div>
      ) : (
        <div>No movies Found</div>
      )}
    </div>
  )
}

export default Home
