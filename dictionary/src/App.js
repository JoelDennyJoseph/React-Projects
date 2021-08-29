import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { header} from './components/header';

function App() {
  const [word, setWord] =  useState("");
  const[meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(meanings);
  
  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div className="App">
      <Container maxWidth='md'>
        <p>Dictionary</p>
        <header />
      </Container>
    </div>
  );
}

export default App;
