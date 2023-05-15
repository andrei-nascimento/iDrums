import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Caixa() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/caixa.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 205,
        height: 205,
        position: 'absolute',
        zIndex: 1,
        bottom: 35,
        left: -100
    }
});