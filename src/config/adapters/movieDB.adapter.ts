/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
// import { TMDB_KEY } from '@env';
import { TMDB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';
console.log('TMDB_KEY', TMDB_KEY)
export const movieDBFetcher = new AxiosAdapter({
   
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: {
         api_key: TMDB_KEY ?? 'apy_key invalid',
    },
});