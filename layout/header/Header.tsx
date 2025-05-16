// in this file we will create a header who contain an app title and more
import React from 'react';
import { View, Text, StyleSheet, ViewComponent } from 'react-native';



const Header = () => {
    return (
        <View style = {styles.header}>
                <Text style = {styles.innerText}>
                    trendingVol
                </Text> 
        </View>
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