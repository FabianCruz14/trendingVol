import React from 'react';
import { View, Text, StyleSheet, ViewComponent } from 'react-native';


const Header = () => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.titleBase}>
                Welcome to
                <Text style = {styles.innerText}>
                    trendingVol
                </Text> 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'red',
    },
    titleBase: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },
    innerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
    }

})

export default Header;