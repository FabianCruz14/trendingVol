import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { BottonProps } from "./types";

// in the bellow types define the actions to record
type Actions = 'Serve' | 'Kill' | 'Assist' | 'Dig' | 'Block';
type Values = -2 | -1 | 0 | 1 | 2;

// we define an array who store action and our value
interface Selection{
    // defined a name of property and the type who is: actions is the type of Actions
    action: Actions;
    value: Values;
}

// here we create an botton to record any game action to save into a DATABASE
const ButtonPlayer : React.FC <BottonProps> = ({name}) => {
    // in this hook set de menu visibility
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    // this hook store the selection to show a subMenu of values
    const [subMenuVisible, setSubMenuVisible] = useState<Actions | null> (null);

    // this hook store the final selection (action + value)
    const [selection, setSelection] = useState <Selection | null> (null);

    const actions: Actions[] = ['Serve', 'Kill', 'Block', 'Dig', 'Assist'];
    const values: Values[] = [-2, -1, 0, 1, 2];
 



    return(
        <View>
            <Text>
                Hello
            </Text>
        </View>

    );
}
