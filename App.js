import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const segundos, setSegundos = useState(0)
  const minutos, setMinutos = useState(0)

  const alarmeSound, setAlarmeSound = useState([
    {
      selecionado: true,
      som: "alarme 1",
      file: "alarme1.mp3"
    },
    {
      selecionado: false,
      som: "alarme 2",
      file: "alarme2.mp3"
    }
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(70, 130, 219)'
  },
});
