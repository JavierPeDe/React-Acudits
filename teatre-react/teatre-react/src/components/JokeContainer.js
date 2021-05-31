import axios from "axios";
import {useState } from "react";



function JokeContainer() {
  const [apiJoke, setApiJoke] = useState('')
    const onClickChange = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then((apiData) =>{
      console.log(apiData.data.value)
      setApiJoke(()=>apiData.data.value)
    })
  };
  return (
    <div>
        <h1>Preparat per riure? 🤣</h1>
      <p>{apiJoke}</p>
      <button onClick={onClickChange}>Següent acudit</button>
    </div>
  );
}

export default JokeContainer;