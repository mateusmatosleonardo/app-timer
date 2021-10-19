import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default props =>{

    var done = false;

    useEffect(()=>{
        const timer = setInterval(()=>{
            props.setarSegundos(props.segundos - 1)
            if(props.segundos <= 0){
                if(props.minutos > 0){
                    props.setarMinutos(minutos - 1)
                    props.setarSegundos(59)
                }else{
                    if(!done){
                        done = true
                        props.setarEstado('leitura')
                        props.setarMinutos(1)
                        props.setarSegundos(0)
                    }
                }
            }
        }, 1000)
        return () => clearInterval(timer);
    })

    function resetar(){
        props.setarEstado('leitura')
        props.setarMinutos(1)
        props.setarSegundos(0)
    }

    function formatarNumero(number){
        let finalNumber = ""
        if(number < 10){
            finalNumber = "0" + number
        }else{
            finalNumber = number
        }

        return finalNumber;
    }

    let segundos = formatarNumero(props.segundos)
    let minutos = formatarNumero(props.minutos)

    return(
        <>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.contador}>{minutos} : </Text>
                <Text style={styles.contador}>{segundos}</Text>
            </View>
                <TouchableOpacity onPress={()=> resetar()} style={styles.btnIniciar}><Text style={{textAlign: 'center', paddingTop: 35}}>Resetar</Text></TouchableOpacity>
        </View>

        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#444'
    },
    contador:{
        color: '#fff',
        fontSize: 30
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