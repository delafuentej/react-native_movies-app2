/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';


export const useMovie = (movieId: number) => {
    const[isLoading, setIsLoading]= useState(true);
    const[ movie, setMovie ] = useState<FullMovie>();
    const[ cast, setCast ] = useState<Cast[]>();
    useEffect(()=>{
        loadMovie();
    },[movieId]);

    const loadMovie=async()=>{
      setIsLoading(true);
      // movie:
      // const fullMovie= await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
      const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
      // actors:
      // const cast =await UseCases.getMovieCastUseCase(movieDBFetcher,movieId);
      const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

      const [fullMovie, cast ] = await Promise.all([fullMoviePromise, castPromise]);
      
      setMovie(fullMovie);
      setCast(cast);
      setIsLoading(false);
      // console.log('fullMovie', fullMovie);
      console.log('cast',cast);
    };


  return{
    movie,
    isLoading,
    cast,
  };
};
