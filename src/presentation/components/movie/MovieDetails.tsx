/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
   movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
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
            <Text style={styles.title}>Actors</Text>

        </View>

       
    </>
  );
};
const styles= StyleSheet.create({
    detailsContainer:{
        marginHorizontal:20,
    },
    castingContainer: {
        marginTop:10,
        marginBottom:100,
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
    text:{
        fontSize: 17,
    },

});
