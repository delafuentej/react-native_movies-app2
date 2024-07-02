/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviesPoster } from './MoviesPoster';

interface Props {
    movies: Movie[],
    height?: number,
}

export const PosterCarousel = ({height = 400, movies}: Props) => {
    
  return (
    <View style={{height}}>
        {/* scrollview => to render the items even if they are not on the screen  */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {movies.map(movie => <MoviesPoster key={movie.id} movie={movie}/>)}


        </ScrollView>
        
    </View>
  );
};
