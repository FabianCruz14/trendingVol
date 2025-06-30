// we need a main button that when press , show a values 

import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ButtonProps } from "../../components/types";

const MainButton : React.FC <ButtonProps> = ({name, playerNum}) => {
    return (
            <View style = {styles.mainButton}>
                <Text style = {styles.playerNum}>{playerNum}</Text>
            </View>
    )
}

const styles = StyleSheet.create ({
    mainButton : {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 15,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#3692c1'
    },
    playerNum : {
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'center'
    }
})

export default MainButton;