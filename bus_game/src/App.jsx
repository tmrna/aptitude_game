import './App.css';
import Card from '../components/interactable/card/card';
import CardDeck from '../components/interactable/card/card_deck';
import CardChoiceBox from '../components/interactable/card/card_choice_box';
import Board from '../components/non_interactable/board';
import ViewPort from '../components/non_interactable/view_port';
function App() {

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
    </Board>
    </ViewPort>
    </>
  )
}

export default App
