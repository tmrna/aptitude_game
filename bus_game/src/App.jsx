import './App.css';
import Card from '../components/interactable/card/card';
import CardDeck from '../components/interactable/card/card_deck';
import CardChoiceBox from '../components/interactable/card/card_choice_box';
import Board from '../components/non_interactable/board/board';
import ViewPort from '../components/non_interactable/view_port/view_port';
import bufferBox from '../components/non_interactable/buffer_box/buffer_box';
import React from 'react';
import { randBool } from '../lib/utilities/rand';
function App() {
  var bufferBoxRefs = [];
  for(let i = 0; i < 100; ++i) {
    const randColor = randBool() ? "blue":"yellow";
    bufferBoxRefs.push([randBool(), randColor]);
  }
  const bufferBoxes = bufferBoxRefs.map( (boxDetails, index) => {
    console.log(index);
    console.log(boxDetails[0]);
    return bufferBox(boxDetails[0], boxDetails[1], index);
  } );
  return (
    <>
    <ViewPort>
    <Board>
    <CardChoiceBox>
    <Card/>
    <Card/>
    <Card/>
    </CardChoiceBox>
    <CardDeck/>
    <CardChoiceBox>
    {bufferBoxes} 
    </CardChoiceBox>
    </Board>
    </ViewPort>
    </>
  )
}

export default App
