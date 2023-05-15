import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Ataque1() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/attack-1.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 225,
        height: 225,
        position: 'absolute',
        zIndex: 1,
        bottom: 180,
        right: 100
    }
});