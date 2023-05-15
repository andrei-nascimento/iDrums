import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Tom1() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/tom-1.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 170,
        height: 170,
        position: 'absolute',
        zIndex: 1,
        bottom: 120,
        right: 30
    }
});