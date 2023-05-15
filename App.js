import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './src/components/background';
import ChimbalFechado from './src/components/Pratos/ChimbalFechado';
import ChimbalAberto from './src/components/Pratos/ChimbalAberto';
import Ataque1 from './src/components/Pratos/Ataque1';
import Splah from './src/components/Pratos/Splash';
import Ataque2 from './src/components/Pratos/Ataque2';
import Hide from './src/components/Pratos/Hide';

export default function App() {
  return (
    <View style={styles.container}>
      <Background />
      <View>
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
