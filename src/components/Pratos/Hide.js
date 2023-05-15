import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Hide() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/hide.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 280,
        height: 280,
        position: 'absolute',
        zIndex: 1,
        bottom: 150,
        left: 100
    }
});