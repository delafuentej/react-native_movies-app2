/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage, topRatedNextPage, upcomingNextPage} = useMovies();

  if(isLoading){
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
        <View style={{marginTop: top + 20, paddingBottom: 30}}>
          
          {/*Main Carousel: nowPlaying movies  */}
          <PosterCarousel movies={nowPlaying}/>
          {/* Popular Carousel movies */}
          <HorizontalCarousel 
            movies={popular} 
            loadNextPage={popularNextPage}
            title='Popular Films'
          />
          {/* Top Rated Carousel movies */}
          <HorizontalCarousel 
            movies={topRated}
            loadNextPage={topRatedNextPage} 
            title='Top-Rated Films'/>
          {/* Upcoming Crousel movies */}
          <HorizontalCarousel 
            movies={upcoming} 
            loadNextPage={upcomingNextPage}
            title='Upcoming Films'/>

        </View>
    </ScrollView>
  );
};
