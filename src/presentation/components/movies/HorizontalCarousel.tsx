/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { FlatList, NativeScrollEvent,NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviesPoster } from './MoviesPoster';
import { useEffect, useRef } from 'react';
import { colors } from '../../../config/theme/globalStyles';

interface Props {
    movies: Movie[];
    title?: string;
    loadNextPage?: ()=> void;
}

export const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
    //it is necessary to determine when the function "loadNextPage" is triggered:
    // useRef => no rendering required
    const isLoading= useRef(false);

    //useEffect=>time to return of the isloading variable from true to false
    useEffect(()=>{
        //setTimeout() => so that the scroll does not happen too fast before changing the state
        setTimeout(()=>{
            isLoading.current = false;
        },400);
    },[movies]);

    const onScroll = (ev: NativeSyntheticEvent<NativeScrollEvent>)=>{
        if (isLoading.current) return;
        // contentOffset
        const {contentOffset, layoutMeasurement, contentSize} = ev.nativeEvent;
        // console.log('contentOffset', contentOffset, 'layoutMeasurement', layoutMeasurement,'contentSize', contentSize);
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if( !isEndReached ) return;
        isLoading.current = true;
        // to load the following movies:
        loadNextPage && loadNextPage();
    };
  return (
    <View
        style={{ height: title ? 260 : 220}}
    >
        {
            title && (
            <Text
                style={styles.textTitle}
            >
                {title}
            </Text>)
        }

        {/* FlatList =>  to render items dynamically*/}
        <FlatList
            horizontal
            data={movies}
            renderItem={({item})=>(
                <MoviesPoster movie={item}  width={140}  height={200}/>

            )}
            // to ensure that we are going to get a unique item id
            keyExtractor={ (item, index)=>` ${item.id}-${index}`}
            showsHorizontalScrollIndicator={false}
            // onScroll =>to determine the end of the movie list
            onScroll={onScroll}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: '400',
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        color: colors.textTitle,
    },
});
