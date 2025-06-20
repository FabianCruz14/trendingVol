import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ButtonProps } from "../../components/types";
import { SafeAreaView } from "react-native";

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
        alignItems: 'center',
        backgroundColor: '#3692c1',

    },
    playerNum : {
          fontSize: 14,
          fontWeight: 'bold'
    }
})

export default MainButton;