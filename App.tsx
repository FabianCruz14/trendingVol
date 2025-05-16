import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ButtonIcon from './components/ButtonCard'; // Importar el componente ButtonIcon
import MenuPlayer from './components/MenuPlayer';
import Header from './layout/header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ButtonIcon /> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    height: '100%',
    width: '100%',
    backgroundColor: 'cyan',
  },
  header: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  titleBase: {
    
  },
  innerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  }
});
