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

import openAI from "./api/generate.js";

const Home = () => {
  const apiCompletionURL =
    "https://api.openai.com/v1/engines/text-davinci-002/completions";
  const apiEditURL = "https://api.openai.com/v1/engines/text-davinci-002/edits";

  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [newText, setNewText] = useState("");

  console.log("HIIII: ", process.env.OPENAI_API_KEY);

  const handleChangeText = async () => {
    setWord("");
    setText("");
    try {
      const response = await axios.post(
        apiCompletionURL,
        {
          prompt: `Make the following text sound more ${word}: 
       ${text}`,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer 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`,
          },
        }
      );
      const newSentence = response.data.choices[0].text;
      setNewText(newSentence);
    } catch (error) {
      console.error("ERROR: ", error);
      alert(error.message);
    }
  };

  const handleEditText = async () => {
    setWord("");
    setText("");
    try {
      const response = await axios.post(
        apiEditURL,
        {
          // model: "text-davinci-edit-001",
          input: text,
          instruction: `Make is sound more ${word}`,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer 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`,
          },
        }
      );
      const newSentence = response.data.choices[0].text;

      setNewText(newSentence);

      console.log("NEW Sente: ", newSentence);
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
      <Button title="completions" onPress={handleChangeText} />
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
