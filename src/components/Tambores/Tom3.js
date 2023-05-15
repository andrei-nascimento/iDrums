import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Tom3() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/tom-3.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 190,
        height: 190,
        position: 'absolute',
        zIndex: 1,
        bottom: 115,
        left: 35
    }
});