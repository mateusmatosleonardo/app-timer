import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function App() {

  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)

  const [alarmeSound, setAlarmeSound] = useState([
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

  let numbers = []
  for(let i = 1; i <= 60; i++){
    numbers.push(i)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{color: '#fff', fontSize: 30}} >Selecione o seu tempo: </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#fff', paddingTop: 14}}>Min</Text>
        <Picker
          selectedValue={minutos}
          onValueChange={(itemValue, itemIndex) => setMinutos(itemValue)}
          style={{height: 50, width: 100, color: '#fff'}}
        >

          {
            numbers.map((val)=>{
              return (<Picker.Item label={val.toString()} value={val.toString()}/>)
            })
          }

        </Picker>

        <Text style={{color: '#fff', paddingTop: 14}}>Seg</Text>
        <Picker
          selectedValue={segundos}
          onValueChange={(itemValue, itemIndex) => setSegundos(itemValue)}
          style={{height: 50, width: 100, color: '#fff'}}
        >
          <Picker.Item label='0' value='0'/>
          {
            numbers.map((val)=>{
              return (<Picker.Item label={val.toString()} value={val.toString()}/>)
            })
          }
        </Picker>

      </View>

        <View>
        {
          alarmeSound.map((val)=>{
            return (
              <TouchableOpacity style={styles.btnSelect}><Text style={{color: '#222'}}>{val.som}</Text></TouchableOpacity>
            )
          })
        }
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444'
  },
  btnSelect: {
    padding: 8,
    backgroundColor: '#c9e4f0',
    borderRadius: 10
  }
})
