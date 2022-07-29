import React from 'react';
import './App.css';
import {useState} from "react";
// import {useEffect} from "react";
import axios from "axios";
import AudioForm from "./components/AudioForm";
import AudioDisplay from "./components/AudioDisplay";

function App() {
  const [dictDisplay, setDictDisplay] = useState(["hi"]);
  const [soundDisplay, setSoundDisplay] = useState(["sound"]);
  const [src, setSrc] = useState("");

  const DICT_URL = "https://backend-breath-capstone.herokuapp.com/test_dict"
  // const STATIC_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_audio"
  const DYNAMIC_SHORT_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_edited_sound"
  // const DYNAMIC_LONG_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_edited_medium_sound"

  const getStaticSound = () => {
    axios({
      url: DYNAMIC_SHORT_SOUND_URL,
      method: "get",
      responseType: "blob",
    })
      .then((res: any) => {
        setSrc(URL.createObjectURL(res.data));
        const newAudio = res.data;
        setSoundDisplay(newAudio);
        console.log("Got the static audio")
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  // const getStaticSound = () => {
  //   axios({
  //     url: STATIC_SOUND_URL,
  //     method: "get",
  //     responseType: "blob",
  //   })
  //     .then((res: any) => {
  //       setSrc(URL.createObjectURL(res.data));
  //       const newAudio = res.data;
  //       setSoundDisplay(newAudio);
  //       console.log("Got the static audio")
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // };

  const getDict = () => {
    axios
      .get(DICT_URL)
      .then((res: any) => {
        const newAudio = res.data;
        setDictDisplay(newAudio);
        console.log("Got the dictionary")
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header> Breathwork Customizer</header>
      <section>
        <h1>APP TITLE</h1>
        <p>Customizer goes here.</p>
        <AudioForm getDictCallback={getDict} getStaticSoundCallback={getStaticSound} />
        <AudioDisplay dictDisplay={dictDisplay} soundDisplay={soundDisplay} src={src} />
      </section>
    </div>
  );
}

export default App;
