import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button,  } from 'react-native';
import Home from './components/Home';
import Home2 from './components/index';
import Sentence from './components/sentenceForm';
import Package from './components/package'
import {useDimensions} from '@react-native-community/hooks'
import Header from './components/header'
import Keyboard from './components/keyboard'
import "react-native-url-polyfill/auto"

export default function App() {
  let pp = 1;
  return (
    <SafeAreaView style={styles.container}>
 
      <Header />
      {/* <Home/> */}
         {/* <Home2/> */}
      {/* <Button title="OOOOO" > </Button> */}
      <Package/>
      {/* <Sentence /> */}
      {/* <Keyboard/> */}
      <StatusBar style="auto" />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
