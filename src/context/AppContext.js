import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
export const AppContext = createContext();



 export const baseUrl =`https://api.tvmaze.com/search/shows?q=all`;


export default function AppContextProvider({ children }) {
const [loading, setLoading] = useState(true); 
const [movies , setMovies] = useState([]);
    
  const getMovies = async(url) =>{
    try{
       const res = await fetch(url);
       const data =await res.json();
       console.log(data);
        setMovies(data);   
       
    }
    catch(err){
      console.log(err);
    }
    finally {
        setLoading(false);
      }
  };



useEffect(() =>{
    getMovies(baseUrl) ;
},[]);


    return <AppContext.Provider value={{ movies, loading }}>{children}</AppContext.Provider>;
  }

export const useGlobalContext =() => {
    return useContext(AppContext);
};


