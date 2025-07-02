import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { avgDoubleNegative, avgNegative, avgZero, avgPositive, avgDoublePositive } from '../../functions/AbsoluteFrequency';
import { FrqTableProps } from '../../components/types';

// this component can help us to show a frecuency table of diferents actions


const FrecuencyTable : React.FC <FrqTableProps> = ({array, name, action}) => {
    const avgDN = avgDoubleNegative(array);
    const avgN = avgNegative(array);
    const avgZ = avgZero(array);
    const avgP = avgPositive (array);
    const avgDP = avgDoublePositive(array);

    // por el momento, mostramos los valores juntos, pero vamos a mejorar esto
    


    return (

        <View style= {styles.container}>
            <Text>AVG {action} of {name}</Text>
            {/* in the View bellow, we show the values of the action */}

            <View style = {styles.frqTable}>
                <View style= {styles.values}>
                    <Text>-2</Text>
                    <Text>-1</Text>
                    <Text>0</Text>
                    <Text>1</Text>
                    <Text>2</Text>
                </View>
                <View style={styles.separator} />

                {/* in the View bellow, we show the Absolute Frecuency */}
                <View style = {styles.absoluteFreq}>
                    <Text>{avgDN.absolute}</Text>
                    <Text>{avgN.absolute}</Text>
                    <Text>{avgZ.absolute}</Text>
                    <Text>{avgP.absolute}</Text>
                    <Text>{avgDP.absolute}</Text>
                </View>
                <View style={styles.separator} />

                {/* in the view bellow, we show the Relative Frecuency */}
                <View style = {styles.relativeFreq}>
                    <Text>{avgDN.relative}</Text>
                    <Text>{avgN.relative}</Text>
                    <Text>{avgZ.relative}</Text>
                    <Text>{avgP.relative}</Text>
                    <Text>{avgDP.relative}</Text>
                </View>
                <View style={styles.separator} />


                <View style = {styles.parcial}>
                    <Text>{avgDN.parcial}</Text>
                    <Text>{avgN.parcial}</Text>
                    <Text>{avgZ.parcial}</Text>
                    <Text>{avgP.parcial}</Text>
                    <Text>{avgDP.parcial}</Text>
                </View>
                <View style={styles.separator} />


                <View style = {styles.xGame}>
                    <Text>{avgDN.xGame}</Text>
                    <Text>{avgN.xGame}</Text>
                    <Text>{avgZ.xGame}</Text>
                    <Text>{avgP.xGame}</Text>
                    <Text>{avgDP.xGame}</Text>
                </View>
            </View>
        </View>
    )
}

export default FrecuencyTable;

const styles = StyleSheet.create ({
    container : {
        width: 500,
        height:120,
    
        backgroundColor: '#94c8e5'
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        textAlign: 'center'
    },
    frqTable: {
        flexDirection: 'row'
    },
    values : {
        margin: 0,
    },
    separator : {
        width : 2,
        backgroundColor : '#142c3d',
        marginHorizontal : 10
    },
    absoluteFreq : {
        margin : 10,
    },
    relativeFreq : {
        margin : 10,
    },
    parcial: {
        margin : 10,
    },
    xGame : {
        backgroundColor : '4BB543',
        margin : 10,
    }
})