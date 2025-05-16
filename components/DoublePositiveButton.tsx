import React, {useState} from 'react'
import { Button, Text, View } from 'react-native'

// first we declare a type will be use into us button

type PlayerProps = {
    name : string;
}

const DoublePositive = (fabian: PlayerProps) => {
    const [doublePositive, setDoublePositive] = useState(0);
    const [showStats, setShowStats] = useState(false);
    let a : number = 0;

    function doubleIncrement(){
        setDoublePositive(a =+ 1);
    }

    return (
        <View>
            <Text>
                Hello {fabian.name}
            </Text>     
                 
        </View>
    )
}

export default DoublePositive;