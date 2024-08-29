/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../config/theme/globalStyles';

interface Props {
    // movie: FullMovie;
    poster: string;
    originalTitle: string;
    title:string;
}

export const MovieHeader = ({poster, originalTitle, title}: Props) => {
    const {height: screenHeight} = useWindowDimensions();
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={{...styles.imageContainer, height: screenHeight * 0.7}}>
           <View style={styles.imageBorder}>
            <Image
                style={styles.posterImage}
                source={{uri: poster}}
            />

           </View>
        </View>
        
        <View style={styles.marginContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{originalTitle}</Text>
           
        </View>
        
        <View style={styles.backButton}>
            <Pressable
                onPress={()=> navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Go Back</Text>
               
            </Pressable>
        </View>


    </View> 
  );
};




const styles = StyleSheet.create({
    container:{
      marginBottom:20,
    },
    imageContainer: {
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8,
      color: colors.textTitle,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.textTitle,
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 100,
      top: 35,
      left: 10,
     
    },
    backButtonText: {
      color: 'white',
  
      fontSize: 25,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.9)', 
      textShadowOffset: {width: -2, height: 2},
      textShadowRadius: 20,
    },
  });