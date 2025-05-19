import React, {useState} from 'react'
import { Button, Pressable, Text, View, StyleSheet} from 'react-native'

interface ButtonProps {
    name: string;
    action: string;
}


const Buttons = (props: ButtonProps) => {
    const [serve, setServe] = useState<number>(0);

    function doublePositiveServe (){
        setServe(serve+2);
    }

    function doubleNegativeServe (){
        setServe(serve-2);
    }



    return (
        <View>
            <Text>
                {props.name}
            </Text>
            <Text>
                {props.action}
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
                you have {serve} points on serve
            </Text>
        </View>
    );



    
}
const styles = StyleSheet.create({
    

})

export default DoublePositive; 