/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { FlatList, StyleSheet, Text, View} from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';
import { colors } from '../../../config/theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';


  



interface Props {
   movie: FullMovie;
   cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <View>
        <View style={styles.detailsContainer}>
            <View style={styles.detailsRow}>
                <View style={styles.rating}>
                    <Icon name="star" size={20} color="gold" style={{marginRight:5}}/>
                    <Text style={{color: (movie.rating >= 6) ? 'green': 'red', fontWeight:'bold', fontSize:20}}>{(movie.rating).toFixed(1)}</Text>
                </View>

                <Text style={styles.genres}>{movie.genres.join(' ')}</Text>
            </View>
            <Text style={styles.title}>Story</Text>
            <Text style={styles.text}>{movie.description}</Text>

            <Text style={styles.title}>Budget</Text>
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

    </View>
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
        justifyContent:'space-between',
    },
    rating:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    genres:{
        marginLeft: 5,
        fontWeight:'400',
        backgroundColor: colors.itemsGenre,
        borderRadius:10,
        padding: 2,
    },
    title:{
        fontSize:25,
        marginTop:10,
        fontWeight:'bold',
        color: colors.textTitle,
    },
    titleCast: {
        fontSize:25,
        marginVertical:10,
        fontWeight:'bold',
        marginHorizontal:20,
        color: colors.textTitle,
    },
    text:{
        fontSize: 17,
        color:colors.textInfo,
    },
    flatListText:{
        color: colors.textInfo,
    },

});
