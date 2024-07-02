/* eslint-disable prettier/prettier */
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpcomingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const moviesUpcomingUseCase = async( fetcher: HttpAdapter, options?: Options): Promise<Movie[]> =>{
    try{
        console.log('upcoming movies page',{page: options?.page ?? 1});
        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming',{
            params: {
                page: options?.page ?? 1,
            },
        });
        // console.log('upcoming', upcoming);
        //to map the result data
        return upcoming.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Upcoming');
    }
};