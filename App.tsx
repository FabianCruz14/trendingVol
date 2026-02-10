import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './layout/header/Header';
import MainButton from './layout/app/MainButton';
import FrecuencyTable from './layout/frecuenciesTables/FrqTable';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ButtonPlayer from './components/Button';
// examples
// from any array of values, get a frequency table with this values

// 1.- [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2]
// 2.- [-2,2,-1,2,1,0,1,2,-2,1,1,2,2]
// 3.- [2 ,2, 2, 2, 2, 2,2 ,2,1,1]
const AttacksFabian = [2 ,2, 2, 2, 2, 2,2 ,2,1,1];
const atk2 = [-2,2,-1,2,1,0,1,2,-2,1,1,2,2];
const atk3 = [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2];

export default function App() {
  return (
    
      <View style = {styles.container}>
        <SafeAreaProvider>

          <SafeAreaView>

            <View style = {styles.frqView}>
              <FrecuencyTable array={AttacksFabian} name = 'Fabian Cruz' action='Attack'></FrecuencyTable>
              {/* <FrecuencyTable array={[0,2,-2,1,-1,0,2,2,-2,-2]} name='M. Nikolov' action='Attack'/> */}
              {/* <ButtonPlayer name='Fabian Cruz' playerNum={14}></ButtonPlayer> */}
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
  );
}

// colors;
// #c6e1f1 200
// #94c8e5  300
// #5babd5  400
// #3692c1  500
// #2674a3  600
// #1f5a7f  700
// #1e4f6e  800
// #1e435c  900
// #142c3d  950

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#c6e1f1',
  },
  frqView:{
    width: 900,
    height: 900,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
