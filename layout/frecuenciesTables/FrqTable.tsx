import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { calculeFrecuency } from '../../functions/AbsoluteFrequency';
import { FrqTableProps } from '../../components/types';

// this component help us to show a frecuency table of diferents actions
// this component need 3 parameters:
// array (number[])        -> its a values that player performance in a game, training or tryout
// name (string)           -> name of the player to be calculate
// action (string)         -> action to be calculate

const FrecuencyTable : React.FC <FrqTableProps> = ({array, name, action}) => {
    // we declare a values to count
    const values = [-2, -1, 0, 1, 2];
    // then, use a const to calcule a frecuencies adding a value
    const results = values.map (value => ({
        value, ...calculeFrecuency(array, value)
    }));

    const sumPartial = results.reduce(
        (sum, p) => sum + p.parcial, 0
    );

    const avg = + (sumPartial / (2*(array.length))).toFixed(2);

    console.log(avg)
    console.log(sumPartial)
    console.log(results)



    // each variable contain a avg of each values:
    // avgDN  ->  average of Double Negatives
    // avgN   ->  average of Negative
    // avgZ   ->  average of Zero
    // avgP   ->  average of Positive
    // avgDP  ->  average of Double Negatives
    const avgDN = calculeFrecuency(array, -2);
    const avgN = calculeFrecuency(array, -1);
    const avgZ = calculeFrecuency(array, 0);
    const avgP = calculeFrecuency (array, 1);
    const avgDP = calculeFrecuency(array, 2);

    const xGame = + (((avgDN.parcial + avgN.parcial + avgZ.parcial + avgP.parcial + avgDP.parcial))/ ((2) * array.length)).toFixed(2); 

    return (

        <View style= {styles.container}>
            <View style={[styles.frqTable, {margin : 10}]}>

            <Text style= {styles.title}>AVG {action} of {name} ;  </Text>
            <Text style = {[
                styles.title,
                {color : xGame < 0 ? 'red' : 'green'}
                ]}
                > {xGame} % </Text>
            </View>
            {/* in the View bellow, we show the values of the action */}

            <View style = {styles.frqTable}>
                <View style= {styles.data}>
                    <Text style = {styles.description}>Value</Text>
                    <Text style = {{height:18}}>-2</Text>
                    <Text style = {{height:18}}>-1</Text>
                    <Text style = {{height:18}}>0</Text>
                    <Text style = {{height:18}}>1</Text>
                    <Text style = {{height:18}}>2</Text>
                </View>
                <View style={styles.separator} />

                {/* in the View bellow, we show the Absolute Frecuency */}
                <View style = {styles.data}>
                    <Text style = {styles.description}>xG</Text>
                    <Text style = {{height:18}}>{avgDN.absoluteFrequency}</Text>
                    <Text style = {{height:18}}>{avgN.absoluteFrequency}</Text>
                    <Text style = {{height:18}}>{avgZ.absoluteFrequency}</Text>
                    <Text style = {{height:18}}>{avgP.absoluteFrequency}</Text>
                    <Text style = {{height:18}}>{avgDP.absoluteFrequency}</Text>
                </View>
                <View style={styles.separator} />

                <View style = {styles.data}>
                    <Text style = {styles.description}>Parcial</Text>
                    <Text style = {{height:18}}>{avgDN.parcial}</Text>
                    <Text style = {{height:18}}>{avgN.parcial}</Text>
                    <Text style = {{height:18}}>{avgZ.parcial}</Text>
                    <Text style = {{height:18}}>{avgP.parcial}</Text>
                    <Text style = {{height:18}}>{avgDP.parcial}</Text>
                </View>
                <View style={styles.separator} />


                <View style = {styles.data}>
                    <Text style = {styles.description}>Avg</Text>
                    <Text style = {[styles.txt, {backgroundColor: 'red'}]}>{avgDN.avg} %</Text>
                    <Text style = {[styles.txt, {backgroundColor: 'orange'}]}>{avgN.avg} %</Text>
                    <Text style = {[styles.txt, {backgroundColor: '#f2fff4'}]}>{avgZ.avg} %</Text>
                    <Text style = {[styles.txt, {backgroundColor: '#5ccb5f'}]}>{avgP.avg} %</Text>
                    <Text style = {[styles.txt, {backgroundColor: 'green'}]}>{avgDP.avg} %</Text>
                </View>
            </View>
        </View>
    )
}

export default FrecuencyTable;

const styles = StyleSheet.create ({
    container : {
        width: 280,
        height:'auto',
        padding: 10,
        backgroundColor: '#94c8e5',
        alignItems: 'center',
        marginLeft: 100,

    },
    txt : {
        height: 18,
        width: 50,
        textAlign: 'center'
    },
    description: {
        color: 'blue'

    },
    title : {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    frqTable: {
        flexDirection: 'row',
    },
    data : {
        alignItems: 'center',
    },
    separator : {
        width : 1,
        backgroundColor : '#142c3d',
        marginHorizontal : 10
    }
})