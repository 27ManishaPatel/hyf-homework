import React ,{useState, useEffect, useCallback} from 'react'
import './App.css';

  const API_URL = `https://dog.ceo/api/${breed}/image/random`;

function App() {
  const [src, setSrc] = useState(null)
  const [breed, setBreed] = useState(null)

  
  async function fetchDog(){
    const response = await fetch(API_URL)
    const {message}= await response.json(breed)
    setSrc(message)
  }
  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <>
    <input
    type='text'
    value={breed}
    onChange= {(e) => setBreed(e.target.value)} ></input>
     <button onClick={fetchDog()}>Fetch</button><br></br>
    {src && < img src={src} width={'50%'} height={'300px'}></img>}
    </>
  );
}

export default App;
