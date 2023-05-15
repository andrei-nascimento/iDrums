import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Tom2() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/tom-2.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 180,
        height: 180,
        position: 'absolute',
        zIndex: 1,
        bottom: 160,
        right: -90
    }
});