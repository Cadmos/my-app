import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import GetRequest from "../../services/NetworkController";
import IRequest from "../../interfaces/IRequest";
import IHero from "../../interfaces/IHero";
import CharacterForm from "../form/GetCharacterForm";

function App() {
  useEffect(() => {
    console.log('use effect was called');
    const tempRequest : IRequest = { SubPath: 'heroes' };
    GetRequest(tempRequest).then((data: IHero[]) => { // Use IHero to type the data
      console.log(data);
      // You can now access properties of a hero like data[0].name
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <CharacterForm /> {/* Add CharacterForm component */}
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;