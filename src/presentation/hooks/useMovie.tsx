/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';


export const useMovie = (movieId: number) => {
    const[isLoading, setIsLoading]= useState(true);
    const[ movie, setMovie ]= useState<FullMovie>();
    useEffect(()=>{
        loadMovie();
    },[movieId]);

    const loadMovie=async()=>{
      setIsLoading(true);
      const fullMovie= await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
      setMovie(fullMovie);
      setIsLoading(false);
      console.log('fullMovie', fullMovie);
    };


  return{
    movie,
    isLoading,
  };
};
