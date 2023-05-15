import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Splah() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/splash.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 155,
        height: 155,
        position: 'absolute',
        zIndex: 1,
        bottom: 260,
        right: 0
    }
});