import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function Tom3() {

    const playAudio = async () => {
        try {
            const soundObject = new Audio.Sound();
            await soundObject.loadAsync(require('../../assets/audios/tom3.wav'));
            await soundObject.playAsync();
        } catch (error) {
            console.log('Erro ao reproduzir o áudio:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playAudio} activeOpacity={1}>
                <Image style={styles.img} source={require('../../assets/imgs/tom-3.png')} />
            </TouchableOpacity>
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