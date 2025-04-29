import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ButtonIcon from './components/ButtonCard'; // Importar el componente ButtonIcon

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ButtonIcon /> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 50,
    height: '100%',
    width: '100%',
    backgroundColor: 'cyan',
  },
});
