import React from 'react'
import {Link} from 'react-router-dom'
import { StyleSheet, Text, View, Button, Image, Pressable, TouchableWithoutFeedback, TouchableOpacity, Alert, Platform,StatusBar, Dimensions, ScrollView, useWindowDimensions } from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'



const Home = () => {

console.log("TERESSTTxxxTTfdfdfdfdt")
let dimension = useDeviceOrientation()

console.log("dimentsion: ", dimension)
console.log("dimentsionXXXX: ", useWindowDimensions())

const landscape = {width: dimension === "landscape" ? "200%" : "50%", borderStyle: "solid", borderColor: dimension === "landscape" ? "black" : "yellow", borderWidth: 4}
  return (
  
    <ScrollView style={[styles.scrollView]}>
    <Text style={[styles.turd, landscape]}>yueeeeeeeedddddddemmeeeeey tumy in turd asshole mysdsds tumdfdfdfdfdmyy</Text>
    

    {dimension === "landscape" ? <Text style={styles.turd}> yummy tumy in turd asshole mysdsds tumdfdfdfdfdmyy </Text> : null}
      
      <TouchableOpacity onPress={()=>console.log("touchable without feedback")}>
    <Image source={{
      // flex: .5,
      width: 300,
      height: 300,
      uri: 'https://m.media-amazon.com/images/I/51ptsl267SL._AC_.jpg'}}
      style={{alignSelf: "center"}} />
      </TouchableOpacity>
 <Button style={styles.button} title="clikc here baby" onPress={()=> console.log("HOLLLLY COWWW")}/>
 <Pressable style={styles.button} title="pressable" onPress={()=> console.log("preaaddsdsdable")}>
  <Text style={styles.button} >ohho</Text>
  
 </Pressable>
 <Button title='Alert Button' onPress={()=> Alert.alert("TITELLL", "Message",[
  {text: "YES YES", onPress: ()=> console.log("ALERT TAPPPERPERPER")},
  {text: "no no no", onPress: ()=> console.log("ALERT TAPPPERPERPER")}
 ])}/>
 <Button title='prompsssst button' onPress={()=> Alert.prompt("prompt titlem ", "prompt message", (text)=> console.log(text))}/>



 <Button style={styles.button} title="clikc here baby" onPress={()=> console.log("HOLLLLY COWWW")}/>
 <Pressable style={styles.button} title="pressable" onPress={()=> console.log("preaaddsdsdable")}>
  <Text style={styles.button} >ohho</Text>
  
 </Pressable>
 <Button title='Alert Button' onPress={()=> Alert.alert("TITELLL", "Message",[
  {text: "YES YES", onPress: ()=> console.log("ALERT TAPPPERPERPER")},
  {text: "no no no", onPress: ()=> console.log("ALERT TAPPPERPERPER")}
 ])}/>
 <Button title='prompsssst button' onPress={()=> Alert.prompt("prompt titlem ", "prompt message", (text)=> console.log(text))}/>
 <Button style={styles.button} title="clikc here baby" onPress={()=> console.log("HOLLLLY COWWW")}/>
 <Pressable style={styles.button} title="pressable" onPress={()=> console.log("preaaddsdsdable")}>
  <Text style={styles.button} >ohho</Text>
  
 </Pressable>
 <Button title='Alert Button' onPress={()=> Alert.alert("TITELLL", "Message",[
  {text: "YES YES", onPress: ()=> console.log("ALERT TAPPPERPERPER")},
  {text: "no no no", onPress: ()=> console.log("ALERT TAPPPERPERPER")}
 ])}/>
 <Button title='prompsssst button' onPress={()=> Alert.prompt("prompt titlem ", "prompt message", (text)=> console.log(text))}/>

    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    
   
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
 
  },
  turd: {
    
    color: Platform.OS === "android" ? "green" : "yellow",
    
   
  },
  button: {
color: "orange",
fontStyle: "italic",
backgroundColor: "black",
width: 75,
height: 30,
  },
  scrollView: { 
    height: "60%",
    backgroundColor: "maroon",
   
  }
})

export default Home