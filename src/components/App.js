import './App.scss';
import Header from "./header/Header";
import CharacterList from "./character/CharacterList";
import {Context} from "./Context";
import {useState, useEffect} from "react";
import React from "react";
import http from "../http";
import Classes from "./classes/Classes";


function App() {
    const [characterStats, setCharacterStats] = useState([]);
    const [classesList, setClassesList] = useState([{}]);

    const [abilities, setAbilities] = useState({
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8
    });

    const getStats = () => {
        http.get('api/ability-scores').then(res => {
            setCharacterStats(res.data.results);
            console.log(characterStats);
        })
    }
    useEffect(() => {
        getStats();
    }, []);


  return (
      <Context.Provider value={{
          characterStats, setCharacterStats,
          abilities, setAbilities,
          classesList, setClassesList,
      }}>
          <div className='main'>
              <Header></Header>
              <h2>START YOUR JOURNEY TRAVELLER</h2>
              <CharacterList></CharacterList>
              <Classes></Classes>
          </div>
      </Context.Provider>
  );
}

export default App;
