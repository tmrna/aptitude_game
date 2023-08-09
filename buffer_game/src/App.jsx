import './App.css';
import Board from '../components/non_interactable/board/board';
import ViewPort from '../components/non_interactable/view_port/view_port';
import React from 'react';

function App() {
  return (
    <>
    <ViewPort>
      <Board/>
    </ViewPort>
    </>
  )
}

export default App
