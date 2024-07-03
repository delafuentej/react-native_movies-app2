/* eslint-disable curly */
/* eslint-disable prettier/prettier */
// import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams,'Details'>{}

export const DetailsScreen = ({route}:Props) => {
  // const {movieId} = useRoute().params;
      const {movieId} = route.params;

      const {movie, isLoading} = useMovie(movieId);

      if(isLoading) return <Text>Loading...</Text>;
  return (
    <View>
       {/* Header */}
      <MovieHeader
        originalTitle= {movie!.originalTitle}
        poster={movie!.poster}
      />

       {/* Details */}
    </View>
  );
};
