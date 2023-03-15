// import Head from "next/head";
import { useState } from "react";
// import styles from "./index.module.css";

export default function Home() {
  const [adjectiveInput, setAdjectiveInput] = useState("");
  const [result, setResult] = useState();
  const [sentence, setSentence] = useState("")

  async function onSubmit(event) {
    event.preventDefault();
    setSentence(adjectiveInput)
    console.log("HELLO ")
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adjective: adjectiveInput, sentence: sentence }),
      });

      const data = await response.json();
      console.log("DATA: ")
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAdjectiveInput("")
      setSentence("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
     

      <main >

        <h3>Make Your Writing Sound More...</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            
            placeholder="Write your adjective here"
            value={adjectiveInput}
            onChange={(e) => setAdjectiveInput(e.target.value)}
          />
       
      
          

          <textarea
          className="sentenceInput"
            type="textarea"
            name="sentence"
            placeholder="Write your sentence here"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <input type="submit" value="Change your text" />
        </form>
        
        <div >Your sentnece: {sentence}</div>
        <div >Your Adjective: {adjectiveInput}</div>
        <div >Updated Version :{result}</div>
      </main>
    </div>
  );
}