/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    width: number;
    height: number;
}
export const MoviesPoster = ({movie, height = 420, width = 300}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
        onPress={()=> navigation.navigate('Details',{movieId: movie.id})}
        style={({pressed})=>({
            width,
            height,
            marginHorizontal:5,
            paddingBottom: 20,
            paddingHorizontal:7,
            opacity: pressed ? 0.8 : 1,
        })
        }
    >
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: movie.poster}}
            />
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        shadowColor: 'gray',
        shadowOffset: {
            width:0,
            height:10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 9,
        borderRadius:15,
    },
    image:{
        flex:1,
        borderRadius:15,
    },
});
