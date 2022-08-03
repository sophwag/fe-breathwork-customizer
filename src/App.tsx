import React from 'react';
import './App.css';
import {useState} from "react";
// import {useEffect} from "react";
import axios from "axios";
// import AudioForm from "./components/AudioForm";
import AudioDisplay from "./components/AudioDisplay";
import NewSoundForm from "./components/NewSoundForm";

function App() {
  const [dictDisplay, setDictDisplay] = useState<any>([]);
  const [soundDisplay, setSoundDisplay] = useState<any>([]);
  const [src, setSrc] = useState("");

  // const DICT_URL = "https://backend-breath-capstone.herokuapp.com/test_dict"
  // const STATIC_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_audio"
  // const DYNAMIC_SHORT_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_edited_sound"
  // const DYNAMIC_LONG_SOUND_URL = "https://backend-breath-capstone.herokuapp.com/test_edited_medium_sound"
  const CUSTOM_AUDIO_URL = "https://backend-breath-capstone.herokuapp.com/custom_audio"

  // const getStaticSound = () => {
  //   axios({
  //     url: DYNAMIC_SHORT_SOUND_URL,
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


  const getCustomAudio = (request_data: any) => {
    setDictDisplay([1]);
    axios({
      url: CUSTOM_AUDIO_URL,
      method: "get",
      params: request_data,
      responseType: "blob",
    })
      .then((res: any) => {
        setSrc(URL.createObjectURL(res.data));
        const newAudio = res.data;
        setSoundDisplay(newAudio);
        setDictDisplay(request_data);
        console.log("Got the custom audio")
      })
      .catch((err: any) => {
        console.log(err);
      });
  };


  // const getDict = () => {
  //   axios
  //     .get(DICT_URL)
  //     .then((res: any) => {
  //       const newAudio = res.data;
  //       setDictDisplay(newAudio);
  //       console.log("Got the dictionary")
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="App">
      <header> Breathwork Customizer</header>
      <section>
        <h1>APP TITLE</h1>
        <p>Customizer below.</p>
        {/* <AudioForm getDictCallback={getDict} getStaticSoundCallback={getStaticSound} /> */}
        <NewSoundForm getCustomAudioCallback={getCustomAudio} />
        <AudioDisplay dictDisplay={dictDisplay} soundDisplay={soundDisplay} src={src} />
      </section>
    </div>
  );
}

export default App;
