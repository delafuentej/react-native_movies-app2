/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';


export const useMovie = (movieId: number) => {
    const[isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
        loadMovie();
    },[movieId]);

    const loadMovie=()=>{

    }


  return{
    
  };
};
