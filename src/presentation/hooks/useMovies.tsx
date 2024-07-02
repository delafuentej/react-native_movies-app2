/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import  { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases/';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';


let popularPage = 1;
let topRatedPage = 1;
let upcomingPage = 1;

export const useMovies = () => {
    const[ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
    const[ popular, setPopular ] = useState<Movie[]>([]);
    const[ topRated, setTopRated ] = useState<Movie[]>([]);
    const[ upcoming, setUpcoming ] = useState<Movie[]>([]);

    const[ isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{
      initLoad();
    },[]);

    const initLoad = async()=>{
        // const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        // const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
        // const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
        // const upcommingPromise = await UseCases.moviesUpcomingUseCase(movieDBFetcher);

        // to be able to make all the promises simultaneously
        const nowPlayingPromise =  UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise =  UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise =  UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcommingPromise =  UseCases.moviesUpcomingUseCase(movieDBFetcher);

        const [
          nowPlayingMovies,
          popularMovies,
          topRatedMovies,
          upcomingMovies,
        ] = await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          upcommingPromise]);

          setNowPlaying(nowPlayingMovies);
          setPopular(popularMovies);
          setTopRated(topRatedMovies);
          setUpcoming(upcomingMovies);

          setIsLoading(false);
          // console.log('nowPlaying', nowPlaying);
          // console.log('popular',popular);
          // console.log('topRated',topRated);
          // console.log('upcoming', upcoming);
    };

  return{
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    //methods
    popularNextPage: async()=>{
      popularPage++;
      //to load the next movies:
      const popularNextMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPage,
      });
      setPopular(prev => [...prev, ...popularNextMovies]);
    },
    topRatedNextPage: async()=>{
      topRatedPage++;
      //to load the next movies:
      const topRatedNextMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, {
        page: topRatedPage,
      });
      setTopRated(prev => [...prev, ...topRatedNextMovies]);
    },
    upcomingNextPage: async()=>{
      upcomingPage++;
      //to load the next movies:
      const upcomingNextMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher, {
        page: upcomingPage,
      });
      setUpcoming(prev => [...prev, ...upcomingNextMovies]);
    },


  };
};
