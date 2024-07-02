/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';
import { MovieDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';

interface Options {
    page?: number;
    limit?: number;
}
export const moviesPopularUseCase = async( fetcher: HttpAdapter, options?: Options): Promise<Movie[]> =>{
    try{
        console.log('popular movies page',{page: options?.page ?? 1});
        const popular = await fetcher.get<MovieDBResponse>('/popular',{
            params: {
                page: options?.page ?? 1,
            },
        });
        // console.log('popular', popular);
        //to map the result data
        return popular.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Popular');
    }
};