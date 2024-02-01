import React from 'react'


const Movies = ({movie}) => {
  return (
    
        <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-center truncate mt-1 w-40">
          {movie.show.name}
        </h1>
      </div>
      
      <div className="h-[250px] w-[200px] ">
        {
        movie.show.image && movie.show.image.medium && (
        
        <img
          src={movie.show.image.medium}
          alt="Movie Image"
          className="h-full w-full rounded-[3px]"
        />)}
      </div>
      </div>)
    
}

export default Movies
