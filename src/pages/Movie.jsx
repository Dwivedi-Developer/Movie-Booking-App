import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Movie = () => {
    const Navigate = useNavigate();
   const {id} = useParams();
    const{movies} = useGlobalContext();
  return (
    <div className='flex justify-center items-center h-[100vh] w-full '>
      {
        movies.map((movie)=> (
         movie.show.id === Number(id) && (
        
        <div className='w-auto border-2 border-black bg-neutral-300 flex gap-10 p-6 position relative '>
         
        <div className="h-[250px] w-[200px] my-auto ">    
        <img
          src={movie.show.image.medium}
          alt="Movie Image"
          className="h-full w-full rounded-[3px] "
        />
        </div>

        <div className=' w-[300px] h-full flex flex-col items-center'><h1 className=" text-gray-700 font-bold text-[30px]  truncate mt-1">{movie.show.name}</h1> 
         
        <p dangerouslySetInnerHTML={{ __html: movie.show.summary}} className='mb-8'/>
       <div className='position absolute bottom-3 flex justify-between w-[300px]'>
        <button className= " font-semibold bg-white text-sm  py-[4px] px-[12px] rounded-[8px] border border-red-700 " onClick={()=>{
               Navigate("/")
        }}>Home</button>
       <NavLink to = {`/ticket/${movie.show.name}`}><button className='font-semibold bg-white text-sm  py-[4px] px-[12px] rounded-[8px] border border-red-700' onClick={()=>{
            
        }}>Book Ticket</button></NavLink>
        </div>
        </div>
        </div>
         )
        ))
      }
    </div>
  )
  
}

export default Movie
