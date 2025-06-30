import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './layout/header/Header';
import MainButton from './layout/app/MainButton';
import { avgDoubleNegative, avgNegative } from './functions/AbsoluteFrequency';

// examples
// from any array of values, get a frequency table with this values

// 1.- [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2]
const AttacksFabian = [-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-1,-2];
const avgFabianDN = avgDoubleNegative(AttacksFabian);
const avgFabianN = avgNegative(AttacksFabian);

export default function App() {
  return (
    <View style = {styles.container}>
      <Header></Header>
      <MainButton playerNum = {14} name = 'Fabian'></MainButton>


      <View style = {styles.frecuencyTable}>
        <View>
          <Text>-2</Text>
          <Text>-1</Text>
          <Text>0</Text>
          <Text>1</Text>
          <Text>2</Text>
        </View>

      <View style={styles.separator} />

      {/* in this column we show the absolute frecuency of all values */}
        <View>
          <Text>{avgFabianDN.absolute}</Text>
          <Text>{avgFabianN.absolute}</Text>
          {/* <Text>{absoluteFrecuencyFabian.zero}</Text>
          <Text>{absoluteFrecuencyFabian.positive}</Text>
          <Text>{absoluteFrecuencyFabian.doublePositive}</Text> */}
        </View>

      <View style={styles.separator} />

        <View>
          <Text>{avgFabianDN.relative}</Text>
          <Text>{avgFabianN.relative}</Text>
          {/* <Text>{absoluteFrecuencyFabian.negative}</Text>
          <Text>{absoluteFrecuencyFabian.zero}</Text>
          <Text>{absoluteFrecuencyFabian.positive}</Text>
          <Text>{absoluteFrecuencyFabian.doublePositive}</Text> */}
        </View>
      
      <View style={styles.separator} />

        <View>
            <Text>{avgFabianDN.parcial}</Text>
            <Text>{avgFabianN.parcial}</Text>
            {/* <Text>{absoluteFrecuencyFabian.negative}</Text>
            <Text>{absoluteFrecuencyFabian.zero}</Text>
            <Text>{absoluteFrecuencyFabian.positive}</Text>
            <Text>{absoluteFrecuencyFabian.doublePositive}</Text> */}
        </View>

      <View style={styles.separator} />
        <View>
            <Text>{avgFabianDN.xGame}</Text>
            <Text>{avgFabianN.xGame}</Text>
            {/* <Text>{absoluteFrecuencyFabian.negative}</Text>
            <Text>{absoluteFrecuencyFabian.zero}</Text>
            <Text>{absoluteFrecuencyFabian.positive}</Text>
            <Text>{absoluteFrecuencyFabian.doublePositive}</Text> */}
        </View>     

      </View>
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
  frecuencyTable : {
    flexDirection : 'row',
    margin : 10,
  },
  separator: {
  width: 2, // grosor de la línea
  backgroundColor: '#1f5a7f', // o el color que quieras
  marginHorizontal: 10,
}
});
