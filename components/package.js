import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
  useWindowDimensions,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import axios from "axios";

// import {FART} from '@env'
// import Constants from 'expo-constants';


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
   
    apiKey: process.env.OPENAI_API_KEY ,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


const Home = () => {
  const apiCompletionURL =
    "https://api.openai.com/v1/engines/text-davinci-002/completions";
  const apiEditURL = "https://api.openai.com/v1/engines/text-davinci-002/edits";

  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [newText, setNewText] = useState("");

//   const openAIKey = Constants.expoConfig.extra.openAIKey

console.log("APIrrr: ", process.env.OPENAI_API_KEY ) 

  const handleEditText = async () => {
    setWord("");
    setText("");
    try {
        const response = await openai.createEdit({
            model: "text-davinci-edit-001",
            input: text,
            instruction: `Edit to sound more ${word}. `,
            temperature: .5
          });
     const newSentence = response.data.choices[0].text;
      setNewText(newSentence);
    } catch (error) {
      console.error("ERRORRRRR", error);
      alert(error.message);
    }
  };


  const handleCompletionText = async () => {
    setWord("");
    setText("");
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
           prompt: `Make the following sound more ${word}: ${text}`,
            temperature: .5
          });
     const newSentence = response.data.choices[0].text;
     const data = response.data;
     console.log("NEW SENTENCE: ", data)
      setNewText(newSentence);
    } catch (error) {
      console.error("ERRORRRRR", error);
      alert(error.message);
    }
  };


  return (

    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <ScrollView style={styles.mainContent}>
    
      <Text style={styles.text}>Add the text you want to alter here: </Text>
      <TextInput
        style={styles.input}
        placeholder={text}
        value={text}
        multiline={true}
        onChangeText={(text) => setText(text)}
      />

      <Text style={styles.text}>Make you text sound more: </Text>
      <ScrollView>
  
      <TextInput
        style={styles.smallInput}
        placeholder="enter text"
        value={word}
        multiline={true}
        onChangeText={(word) => setWord(word)}
      />
      </ScrollView>
     <View style={styles.buttons}>
      <Pressable title="edit" onPress={handleEditText} style={styles.pressable}><Text style={styles.pressableText}>Edit</Text></Pressable>
      <Pressable title="completion" onPress={handleCompletionText} style={styles.pressable}><Text style={styles.pressableText}>Completion</Text></Pressable>
      </View>
      {newText ? <Text style={styles.text}>Updated Text: </Text> : null}
      {newText ? <Text style={styles.newText}>{newText} </Text> : null}
      </ScrollView>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  container: {
    height: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",

    borderColor: "black",
    borderWidth: 2,

  },
//   mainContent: {
//     marginTop: 100,
//     display: "flex",
//    borderColor: "black",
//    borderWidth: 2,
//     alignSelf: "center",

 
//   },
  text: {
    color: "black",
    alignSelf: "center"
  },
  input: {
    backgroundColor: "white",
    height: 200,
    width: 300,
  },
  smallInput: {
    height: 20,
    backgroundColor: "white",
  },
  newText: {
    backgroundColor: "white",
  },
  pressable: {
    width: 100,
    height: 30,
    backgroundColor: "dodgerblue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  pressableText: {
    color: "white",
    alignSelf: "center"
  },
  buttons: {
    gap: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Home;
