import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function KickDireito() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/kick-direito.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
        position: 'absolute',
        zIndex: 1,
        bottom: -70,
        left: -15
    }
});