import * as React from 'react';
import { IconButton } from 'react-native-paper';

const ButtonIcon = () => {
    return (
        <IconButton
            icon={require('../assets/RanTakahashi.jpg')}
            size={20}
            onPress={() => alert('Pressed')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
        />
    )
}

export default ButtonIcon;
