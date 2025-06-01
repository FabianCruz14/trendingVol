import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { BottonProps } from "./types";

// in the bellow types define the actions to record
// Action is type of each game-action to count and then record this data (action + value) in a Database
// thats means Action can be "Serve", "Kill", "Assist", "Dig" or "Block"
// and Value can be -2, -1, 0, 1, 2
type Action = 'Serve' | 'Block' | 'Dig' | 'Assist' | 'Kill' ;
type Value = -2 | -1 | 0 | 1 | 2;

// in the bellow interface we define a data who need to info for user, in this case called Selection
// Selection had 2 properties, action and value, thats means they need this data 
interface Selection{
    // property action is of type Actions
    action: Action;
    value: Value;
}

// here we create an botton to record any game action to save into a DATABASE
const ButtonPlayer : React.FC <BottonProps> = ({name}) => {
    // in this hook set de menu visibility
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    // this hook store the selection to show a subMenu of values
    const [subMenuVisible, setSubMenuVisible] = useState<Action | null> (null);

    // this hook store the final selection (action + value)
    const [selection, setSelection] = useState <Selection | null> (null);

    // here we create an array who contain the option to show 
    const actions: Action[] = ['Serve', 'Kill', 'Block', 'Dig', 'Assist'];
    const values: Value[] = [-2, -1, 0, 1, 2];

    function KillAvg (killsPoints:number, totalKills:number){
        let kAvg: number = 0;
        kAvg = ((killsPoints / totalKills) * (100));
        return kAvg;
    } 

    const fabianKill = KillAvg(5,10);
    console.log(fabianKill);
 



    return(
        <View style={styles.container}>
            {/* here create a main button to select actions and values */}
            <Pressable style = {styles.mainButton}
                // when user press the button, menuVisible set as true
                onPress={() => setMenuVisible(!menuVisible)}>
                <Text style = {styles.player}>{name}</Text>
            </Pressable>

            <Text>
                {name}
                {fabianKill}
            </Text>
        </View>

    );
}

const styles = StyleSheet.create ({
        container:{
            flex: 1,
            backgroundColor: 'cyan'
        },
        txt: {
            fontWeight: 'bold'
        }


    }
);

export default ButtonPlayer;




/*
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const BotonInteractivo = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(null); // letra seleccionada
  const [seleccion, setSeleccion] = useState(null); // registro de selección

  const letras = ['Serve', 'Kill', 'Block', 'Dig', 'Assist'];
  const numeros = [-2, -1, 0, 1, 2];

  const registrarSeleccion = (letra, numero) => {
    setSeleccion({ letra, numero });
    setSubMenuVisible(null); // oculta el submenú
    setMenuVisible(false);   // oculta el menú principal
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.botonPrincipal} onPress={() => setMenuVisible(!menuVisible)}>
        <Text style={styles.textoBoton}>14</Text>
      </Pressable>

      {menuVisible && (
        <View style={styles.menu}>
          {letras.map((letra) => (
            <Pressable key={letra} style={styles.opcion} onPress={() => setSubMenuVisible(letra)}>
              <Text style={styles.textoOpcion}>{letra}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {subMenuVisible && (
        <View style={styles.subMenu}>
          {numeros.map((numero) => (
            <Pressable
              key={numero}
              style={styles.opcion}
              onPress={() => registrarSeleccion(subMenuVisible, numero)}
            >
              <Text style={styles.textoOpcion}>{numero}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {seleccion && (
        <Text style={styles.resultado}>
          Last Action {seleccion.letra}  {seleccion.numero}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center', flex:1, backgroundColor: 'cyan' },
  botonPrincipal: {
    marginTop: 40,
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  textoBoton: { color: '#fff', fontSize: 16 },
  menu: { flexDirection: 'row', marginBottom: 10 },
  subMenu: { flexDirection: 'row', marginBottom: 10 },
  opcion: {
    backgroundColor: '#ccc',
    padding: 8,
    margin: 5,
    borderRadius: 8,
  },
  textoOpcion: { fontSize: 16 },
  resultado: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});

export default BotonInteractivo;

*/