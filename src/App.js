import React from 'react';
import './App.css';
import { Component } from "react"
import Dice from "./components/Dice"
import CharacterChoice from "./components/CharacterChoice"
//import { Button } from "reactstrap"


class App extends Component {
      render() {
        return (
          // JSX CODE
          <div>
            <div className = "home">
                <Dice />
            </div>

            <CharacterChoice />

          </div>
        )
      }
}
 
 
export default App;


