import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FrecuencyTable from './FrqTable';

const FrecuencyView : React.FC = () => {
    return (
        <View style = {styles.frqView}>
        </View>
    )
}

const styles = StyleSheet.create ({
    frqView:{
        justifyContent: 'space-between'
    }
})