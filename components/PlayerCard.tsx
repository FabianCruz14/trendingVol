import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {PlayerCardProps} from './types'

// defined a PlayerCard who is a Functional Component that recive their props, that is <PlayerCardProps>

const PlayerCard : React.FC<PlayerCardProps> = ({
    name,
    lastName,
    imageUri,
    position,
    team,
    jerseyNumber,
    height,
    weight,
    kill,
    assist,
    err,
}) => {
    return (
        <View style={styles.card}>

        </View>
    );
};


const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: '15%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
    }
})