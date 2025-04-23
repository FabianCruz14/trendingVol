import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { FAB, Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <PaperProvider> 
      <View style={styles.container}>
        <Text>Welcome to the App!</Text>
        <FAB
          style={styles.button}
          icon="bell"
          label="Add"
          onPress={() => setOpen(!open)}  
        />
      </View>
    </PaperProvider>
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
  button : {
    margin: 'auto',
    marginTop: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 100,
    borderRadius: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
