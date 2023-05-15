import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function ChimbalFechado() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/chim-closed.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 160,
        height: 160,
        position: 'absolute',
        zIndex: 1,
        bottom: 4,
        right: 195
    }
});
