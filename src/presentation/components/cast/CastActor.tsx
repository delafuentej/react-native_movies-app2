/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../../core/entities/cast.entity';
import { colors } from '../../../config/theme/globalStyles';

interface Props {
    actor: Cast;

}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
        <Image
            source= {{ uri:actor.avatar}}
            style={styles.actorImg}
        />
        <View style={styles.actorInfo}>
            <Text style={styles.textActorInfo}>{actor.name}</Text>
            <Text style={{...styles.textActorInfo, opacity: 0.7}}>{actor.character}</Text>
        </View>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        width:100,
        marginRight:10,
        paddingLeft: 10,
    },
    actorImg:{
        width: 100,
        height:150,
        borderRadius: 10,
    },
    actorInfo:{
        marginLeft:10,
        marginTop:4,

    },
    textActorInfo: {
        fontSize: 15,
        fontWeight:'bold',
        color:colors.textInfo,
    },
});
