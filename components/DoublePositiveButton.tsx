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



    return (
        <View style = {styles.button}>
            <Text style = {styles.action}>
                {props.action}
            </Text>

            <Text style={styles.name}>
                {props.name}
            </Text>

            <Pressable onPress={doublePositiveServe}>
                <Text>
                    +2
                </Text>
            </Pressable>

            <Pressable onPress={doubleNegativeServe}>
                <Text>
                    -2
                </Text>
            </Pressable>

            <Text>
                you have {counter} points on serve
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 50,
    },
    action: {
        fontSize: 25
    },
    name: {
        fontSize: 12
    },
})

export default Buttons; 