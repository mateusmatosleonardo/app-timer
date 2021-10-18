import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default props =>{
    return(
        <>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.contador}>{props.minutos} : </Text>
                <Text style={styles.contador}>{props.segundos}</Text>
            </View>
                <TouchableOpacity onPress={()=> props.setarEstado('selecionar')} style={styles.btnIniciar}><Text style={{textAlign: 'center', paddingTop: 35}}>Resetar</Text></TouchableOpacity>
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