// in this file we will create a header who contain an app title and more
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
    return (
        <SafeAreaView style = {{backgroundColor: 'black'}}>

        <View style = {styles.header}>
                <Text style = {styles.innerText}>
                    trendingVol
                </Text> 

        </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#3692c1',
    },
    innerText: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 500,
        color: '#1e4f6e',
    }

})

export default Header;