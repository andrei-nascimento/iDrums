import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './src/components/Background';
import ChimbalFechado from './src/components/Pratos/ChimbalFechado';
import ChimbalAberto from './src/components/Pratos/ChimbalAberto';
import Ataque1 from './src/components/Pratos/Ataque1';
import Splah from './src/components/Pratos/Splash';
import Ataque2 from './src/components/Pratos/Ataque2';
import Hide from './src/components/Pratos/Hide';
import KickDireito from './src/components/Tambores/KickDireito';
import KickEsquerdo from './src/components/Tambores/KickEsquerdo';
import Tom1 from './src/components/Tambores/Tom1';
import Tom2 from './src/components/Tambores/Tom2';
import Tom3 from './src/components/Tambores/Tom3';
import Tom4 from './src/components/Tambores/Tom4';
import Caixa from './src/components/Tambores/Caixa';
//import AudioSample from './src/components/AudioSample/AudioSample';


export default function App() {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.tambores}>
        <View>
          <KickEsquerdo />
        </View>
        <KickDireito />
        <Caixa />
        <Tom1 />
        <Tom2 />
        <Tom3 />
        <Tom4 />
      </View>
      <View style={styles.pratos}>
        <ChimbalFechado />
        <ChimbalAberto />
        <Ataque1 />
        <Splah />
        <Hide />
        <Ataque2 />
      </View>
      <StatusBar style="light" />
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
});
