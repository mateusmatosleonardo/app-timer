import { StatusBar } from 'expo-status-bar';
import React, { cloneElement, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Contador from './components/Contador';


export default function App() {

  const [estado, setEstado] = useState('selecionar')
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(1)
  const [alarmeSound, setAlarmeSound] = useState([
    {
      id: 1,
      selecionado: true,
      som: "alarme 1",
      file: "alarme1.mp3"
    },
    {
      id: 2,
      selecionado: false,
      som: "alarme 2",
      file: "alarme2.mp3"
    },
    {
      id: 3,
      selecionado: false,
      som: "alarme 3",
      file: "alarme3.mp3"
    }
  ])

  let numbers = []
  for(let i = 1; i <= 60; i++){
    numbers.push(i)
  }

  const setAlarme = (id) =>{
    let alarmesTemp = alarmeSound.map((val)=>{
      if(id != val.id)
        val.selecionado = false
      else
        val.selecionado = true
      return val
    })
    
    setAlarmeSound(alarmesTemp)

  }
  if(estado === 'selecionar'){
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

        <View style={{flexDirection: 'row'}}>
        {
          alarmeSound.map((val)=>{
            if(val.selecionado){
              return (
                <TouchableOpacity onPress={()=> setAlarme(val.id)} style={styles.btnSelected}>
                  <Text style={{color: '#222'}}>{val.som}</Text>
                </TouchableOpacity>
              )
            }else{
              return (
                <TouchableOpacity onPress={()=> setAlarme(val.id)} style={styles.btnSelect}><Text style={{color: '#222'}}>{val.som}</Text></TouchableOpacity>
              )
            }
          })
        }
        </View>
          <TouchableOpacity onPress={()=> setEstado('iniciar')} style={styles.btnIniciar}><Text style={{textAlign: 'center', paddingTop: 35}}>Iniciar</Text></TouchableOpacity>
    </View>
  );
    }else if(estado === 'iniciar'){
      return(
        <Contador setarMinutos={setMinutos} setarSegundos={setSegundos} setarEstado={setEstado} minutos={minutos} segundos={segundos}/>
      )
    }
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
    marginRight: 10,
    padding: 8,
    backgroundColor: '#c9e4f0',
    borderRadius: 10
  },
  btnSelected: {
    marginRight: 10,
    padding: 8,
    backgroundColor: 'rgba(201, 228, 240, 0.5)',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  btnIniciar: {
    backgroundColor: 'rgb(201, 228, 240)',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 40,
    borderColor: '#fff',
    borderWidth: 2
  }
})
