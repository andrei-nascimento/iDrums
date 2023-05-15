import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Background() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/imgs/background.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        position: 'absolute',
        zIndex: 2,
    }
});
