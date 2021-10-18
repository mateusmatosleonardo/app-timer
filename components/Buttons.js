import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default props =>{
    return(
        <View>
            <TouchableOpacity style={style.btnSelect}><Text>Alarme 1</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    btnSelect: {
        padding: 8,
        backgroundColor: '#c9e4f0',
        borderRadius: 10
    }
})

