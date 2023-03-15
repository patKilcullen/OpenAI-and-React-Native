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
console.log("BONGGOOO")
console.log("APIrrr: ", process.env.OPENAI_API_KEY ) 
 console.log("faddddrt: ", process.env.FART ) 
// console.log("KEY: ", openAIKey)
  const handleEditText = async () => {
    setWord("");
    setText("");
    try {
        const response = await openai.createEdit({
            model: "text-davinci-edit-001",
            input: text,
            instruction: `Edit to sound more ${word}. `,
            temperature: .1
          });
        


    //   const response = await axios.post(
    //     apiEditURL,
    //     {
    //       // model: "text-davinci-edit-001",
    //       input: text,
    //       instruction: `Make is sound more ${word}`,
    //       max_tokens: 1024,
    //       temperature: 0.5,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         'Authorization' : `Bearer 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`,
    //       },
    //     }
    //   );
     const newSentence = response.data.choices[0].text;
console.log("NEw Sentence: ", newSentence)
      setNewText(newSentence);

    //   console.log("NEW Sente: ", newSentence);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error("ERRORRRRR", error);
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Add the text you want to alter here: </Text>
      <TextInput
        style={styles.input}
        placeholder={text}
        value={text}
        multiline={true}
        onChangeText={(text) => setText(text)}
      />

      <Text style={styles.text}>Make you text sound more: </Text>
      <TextInput
        style={styles.smallInput}
        placeholder="enter text"
        value={word}
        multiline={true}
        onChangeText={(word) => setWord(word)}
      />
     
      <Button title="edits " onPress={handleEditText} />
      {newText ? <Text style={styles.text}>Updated Text: </Text> : null}
      {newText ? <Text style={styles.newText}>{newText} </Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
  },
  text: {
    color: "black",
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
    backgroundColor: "aqua",
  },
});

export default Home;
