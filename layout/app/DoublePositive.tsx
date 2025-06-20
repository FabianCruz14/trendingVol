// in this component, we create an button who count double positive of kills
// thats means, each button component will have multi functions to 
// improve the flow of stats

import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Button : React.FC <{}> = () => {
    return (
        <View style = {styles.button}>
            <Text style = {styles.playerNum}>14</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    button : {
        width: 50,
          height: 50,
          borderRadius: 50,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between' 
    },
    playerNum : {
          fontSize: 14,
          fontWeight: 'bold'
    }
})