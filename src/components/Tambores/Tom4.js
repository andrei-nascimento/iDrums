import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Tom4() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/tom-4.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 220,
        height: 220,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        left: 180
    }
});