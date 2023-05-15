import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function ChimbalFechado() {

    const playAudio = async () => {
        try {
            const soundObject = new Audio.Sound();
            await soundObject.loadAsync(require('../../assets/audios/chimbal-fechado.wav'));
            await soundObject.playAsync();
        } catch (error) {
            console.log('Erro ao reproduzir o áudio:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playAudio} activeOpacity={1}>
                <Image style={styles.img} source={require('../../assets/imgs/chim-closed.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        position: 'absolute',
        zIndex: 1,
        bottom: 4,
        right: 210
    }
});
