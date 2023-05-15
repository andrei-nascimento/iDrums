import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function ChimbalAberto() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/chim-open.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 180,
        height: 180,
        position: 'absolute',
        zIndex: 1,
        bottom: 80,
        right: 165
    }
});