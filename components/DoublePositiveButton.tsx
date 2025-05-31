import React, {useState} from 'react'
import { Pressable, Text, View, StyleSheet} from 'react-native'
// to improve good practice, we create a types file where declare types and interfaces
import {BottonProps } from './types'


// here we code an simple button who changes whit press in
const Button : React.FC <BottonProps> = ({name}) => {

    // useState can help us cause its a component that remember the state
    const [doublePositive, setDoublePositive] = useState<number>(0);
    return (
        <View style = {styles.container}>
            {/* this component have name properties, in App.tsx can define this props like our prefers */}
            <Text style={styles.name}>
                {name}
            </Text>

            <View style={styles.buttonRow}>
                <Pressable 
                        onPress={()=> setDoublePositive(doublePositive => doublePositive + 2)}
                        style = {({pressed}) => [
                            {
                                backgroundColor: pressed ? '#5cb85c' : '#94c8e5',
                                
                            },
                            styles.circleButton
                        ]}>  

                        {({pressed}) => (
                            <Text style={[
                                {
                                    color : pressed ? '#c6e1f1' : '#1e435c',
                                },
                                styles.buttonText 
                                ]}>
                                +2
                            </Text>
                        )}
                </Pressable>   
                <Pressable
                    style={({ pressed }) => [
                            {
                                display: pressed ? 'flex' : 'none',
                            },
                        styles.buttonSecondary,
                    ]}
                    onPress={() => alert('¡Botón derecho presionado!')}
                >
                    {() => <Text style={styles.buttonText}>Nuevo botón</Text>}
                </Pressable>          
            </View>


            <Text style={styles.buttonInfo}>
                you have {doublePositive} points on serve
            </Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#2674a3',
        borderRadius: 5,
    },
    action: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#142c3d',
        marginTop: 5,
    },
    name: {
        fontSize: 12,
        color: '#142c3d',
        marginTop: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 16,
    },
    circleButton:{
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
    
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonInfo: {
        fontSize:14,
        color: '#142c3d'
    },
    buttonSecondary: {
        marginLeft: 10,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#ffd',
        borderWidth: 1,
        borderColor: '#ccc',
      },
    

})

export default Button; 