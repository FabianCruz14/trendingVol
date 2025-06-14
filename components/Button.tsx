import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { BottonProps, Action, Value, Selection } from "./types";


// here we create an botton to record any game action to save into a DATABASE
const ButtonPlayer : React.FC <BottonProps> = ({name, playerNum}) => {
    // in this hook set de menu visibility
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    // this hook store the selection to show a subMenu of values
    const [subMenuVisible, setSubMenuVisible] = useState<Action | null> (null);
    // this hook store the final selection (action + value)
    const [selection, setSelection] = useState <Selection | null> (null);
    //in the hook below define an array with all actions who is an type of Selection array with unfill array
    const [story, setStory] = useState <Selection[]> ([]);

    // here we create an array who contain the option to show 
    const actions: Action[] = ['Serve', 'Kill', 'Block', 'Dig', 'Assist'];
    const values: Value[] = [-2, -1, 0, 1, 2];

    // this function recive an action & value. Then create an object with this action and values 
    const recordSelection = (action: Action, value: Value) => {
        // object with actions and values 
        const newAction : Selection = {action, value};
        // prev represent a previous value of the state, React guatantees that prev is the most recent state
        // the set bellow means:
        // when update story, take the recent value (prev) and add newAction to queue
        setStory (prev => [...prev, newAction]);
        // set the selection to show in the UI
        // this means that the selection is the last action and value selected by user
        setSelection(newAction);
        // close the menu for a clean UI
        setSubMenuVisible(null);
        setMenuVisible(false);
    };

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
            <Pressable style = {({pressed}) => [
              {
                backgroundColor : pressed ? '#5cb85c' : '#94c8e5',

              },
              styles.mainButton
            ]}
            
            
                // when user press the button, menuVisible set as true
                onPress={() => setMenuVisible(!menuVisible)}>
                <Text style = {styles.playerName}>{name}</Text>
                <Text style = {styles.playerNum}>{playerNum}</Text>
                
            </Pressable>

            {/* conditional paterns using && that means: if 'condition' then render the menu in ui */}
            {menuVisible && (
                <View style ={styles.menu}> 
                    {actions.map((action) => (
                        <Pressable key={action} 
                            style = {({pressed}) => [
                                {
                                    backgroundColor : pressed ? '#5cb85c' : '#94c8e5',
                                },
                                styles.actions
                            ]}
                            onPress={() => setSubMenuVisible(action)}>
                                <Text style = {styles.txtOption}> {action}</Text>
                        </Pressable>
                    ))}
                </View>
            )}

            {subMenuVisible && (
                <View style = {styles.subMenu}>
                    {values.map((value) => (
                        <Pressable key={value} 
                            style = {({pressed}) => [
                              {
                                backgroundColor : pressed ? '#94c8e5' : '#3692c1'
                              },
                              styles.values
                            ]}
                            onPress={() => recordSelection (subMenuVisible, value)}>
                                <Text style = {styles.txtOption}> {value}</Text>
                        </Pressable>
                    ))}
                </View>
            )}

            {selection && (
                <Text style = {styles.info}>
                    Last Action {selection.action} {selection.value}
                </Text>
            )}

                        {story.length  > 0 && (
              <View style={{marginTop: 10}}>
                <Text style={{fontWeight: 'bold'}}>Historial:</Text>
                {story.map((item, idx) => (
                  <Text key={idx} style={{fontSize: 12}}>
                    {item.action} {item.value}
                  </Text>
                ))}
              </View>
            )}
        
        </View>
    );
}

const styles = StyleSheet.create ({
        container:{
            height: 200,
            width: 200,
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: '#2674a3'
        },
        mainButton: {
          width: 50,
          height: 50,
          borderRadius: 50,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'      
        },
        playerName: {
          fontSize: 10,
          fontWeight: 'light'
        },
        playerNum : {
          fontSize: 14,
          fontWeight: 'bold'
        },
        actions: {
           padding: 8,
           margin: 5,
           borderRadius: 8
        },
        menu : {
          flexDirection: 'row',
          marginBottom: 10,
        },
        subMenu: {
          flexDirection: 'column',
          marginBottom: 10
        },
        values: {
          padding: 8,
          margin: 5,
          borderRadius: 10,
        },
        info : {
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold'
        }
        ,
        txtOption: {
          fontSize: 16,
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