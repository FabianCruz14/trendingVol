import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleBarChart from './components/SimpleBarChart';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to trendingVol</Text>

      <SimpleBarChart
      barData={[
        { value: 10, label: 'A' },
        { value: 20, label: 'B' },
        { value: 30, label: 'C' },   
        { value: 35, label: 'D' },
        { value: 40, label: 'E' },
        { value: 50, label: 'F' },
      ]}
      frontColor="blue"
      barWidth={20}
      barBorderRadius={4}
      />

      {/* <View style={styles.firstBlue} />
      <View style={styles.secondBlue} />
      <View style={styles.thirdBlue} /> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 50,
    height: '75%',
    width: '100%',
    backgroundColor: 'cyan',
  },
  firstBlue: {
    height: '15%',
    backgroundColor: 'steelblue',
  },
  secondBlue: {
    width: '66%',
    height: '35%',
    backgroundColor: 'skyblue',
  },
  thirdBlue: {
    width: '33%',
    height: '50%',
    backgroundColor: 'lightblue',
  }
});
