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
        width: 270,
        height: 270,
        position: 'absolute',
        zIndex: 1,
        bottom: 160,
        left: 130
    }
});