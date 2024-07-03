/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { FlatList, StyleSheet, Text, View} from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';


interface Props {
   movie: FullMovie;
   cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
        <View style={styles.detailsContainer}>
            <View style={styles.detailsRow}>
                <Text style={styles.rating}>{movie.rating}</Text>
                <Text style={styles.genres}>{movie.genres.join(', ')}</Text>
            </View>
            <Text style={styles.title}>Story:</Text>
            <Text style={styles.text}>{movie.description}</Text>

            <Text style={styles.title}>Budget:</Text>
            <Text style={styles.text}>{Formatter.currency(movie.budget)}</Text>

        </View>

        {/* Casting -Actors */}
        <View style={styles.castingContainer}>
            <Text style={styles.titleCast}>Actors</Text>
            <FlatList
                data={cast}
                keyExtractor={ (item, index)=>` ${item.id}-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> <CastActor  actor={item}/>}
            />

        </View>

    </>
  );
};
const styles = StyleSheet.create({
    detailsContainer:{
        marginHorizontal:20,
    },
    castingContainer: {
        marginTop:10,
        marginBottom:50,
    },
    detailsRow:{
        flexDirection:'row',
    },
    rating:{

    },
    genres:{
        marginLeft: 5,
    },
    title:{
        fontSize:25,
        marginTop:10,
        fontWeight:'bold',
    },
    titleCast: {
        fontSize:25,
        marginVertical:10,
        fontWeight:'bold',
        marginHorizontal:20,
    },
    text:{
        fontSize: 17,
    },

});
