/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator
            size='large'
            color='indigo'
        />
    </View>
  );
};
const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
});
