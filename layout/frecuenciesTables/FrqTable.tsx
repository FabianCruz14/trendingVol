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
        value, ...calculeFrecuency(array, value)}));

    const sumPartial = results.reduce(
        (sum, p) => sum + p.parcial, 0);

    const avg =  +(sumPartial / (2*(array.length)) * 100).toFixed(2);

    console.log(avg, typeof avg)
    console.log(sumPartial)
    console.log(results)

    return (
        // <View style = {styles.num} >
        // </View>

        <View style= {styles.container}>

            <View style={styles.frqTable}>
                <Text style= {styles.title}>AVG {action} of {name} ;  </Text>
                <Text style = {[
                    styles.title,
                    {color : avg <= 0 ? 'red' : 'green'}
                    ]}> {avg} % </Text>
            </View>
            {/* in the View bellow, we show the values of the action */}

            <View style = {styles.frqTable}>
                <View style = {styles.data}>
                    <Text style = {styles.description}>Value</Text>
                    {results.map(res=> (
                        <Text key={res.value} style = {{textAlign: 'center', margin:2}}>{res.value}</Text>
                    ))}
                </View>

                <View style={styles.separator} />

                {/* in the View bellow, we show the Absolute Frecuency */}
                <View style = {styles.data}>
                    <Text style = {styles.description}>xG</Text>
                    {results.map(res=> (
                        <Text key={res.value} style = {{margin: 2}} >{res.absoluteFrequency}</Text> 
                    ))}
                </View>

                <View style={styles.separator} />

                <View style = {styles.data}>
                    <Text style = {styles.description}>Parcial</Text>
                    {results.map(res => (
                        <Text key={res.value} style = {{margin: 2}} > {res.parcial} </Text>
                    ))}
                </View>

                <View style={styles.separator} />


                <View style = {styles.data}>
                    <Text style = {styles.description}>Avg</Text>
                    {results.map(res => (
                        <Text key={res.value} style = {{margin: 2}}> {res.avg} %</Text>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default FrecuencyTable;

const styles = StyleSheet.create ({
    container : {
        width: 'auto',
        height: 'auto',
        margin: 35,
        padding: 55,
        backgroundColor: '#94c8e5',
        alignItems: 'center',

    },
    description: {
        color: 'blue',
        margin: 2
    },
    title : {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    frqTable: {
        flexDirection: 'row',
        margin: 5,
        
    },
    data : {
        alignItems: 'center',
        height: 20,
        width: 'auto'
    },
    separator : {
        width : 1,
        backgroundColor : '#142c3d',
        marginHorizontal : 10
    }
})