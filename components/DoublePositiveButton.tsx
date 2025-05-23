import React, {useState} from 'react'
import { Pressable, Text, View, StyleSheet} from 'react-native'

interface ButtonProps {
    name: string;
    action: string;
}


const Buttons = (props: ButtonProps) => {
    const [counter, setCounter] = useState<number>(0);

    function doublePositiveServe (){
        setCounter(counter+2);
    }

    function doubleNegativeServe (){
        setCounter(counter-2);
    }

    function statServe (numServ: number, intentos: number, ptjServ :number){
        ptjServ = numServ / intentos;

        return ptjServ;
    }

    const fabian = [
        
    ]

    return (
        <View style = {styles.container}>
            <Text style = {styles.action}>
                {props.action}
            </Text>

            <Text style={styles.name}>
                {props.name}
            </Text>

            <View style={styles.buttonRow}>
                <Pressable style={styles.circleButton} onPress={doublePositiveServe}>
                    <Text style= {styles.buttonText}>
                        +2
                    </Text>
                </Pressable>

                <Pressable style={styles.circleButton} onPress={doubleNegativeServe}>
                    <Text style = {styles.buttonText}>
                        -2
                    </Text>
                </Pressable>                
            </View>


            <Text style={styles.buttonInfo}>
                you have {counter} points on serve
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#c6e1f1',
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
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#c6e1f1',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonInfo: {
        fontSize:14,
        color: '#142c3d'
    }

})

export default Buttons; 