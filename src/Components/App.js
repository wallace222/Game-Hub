import '../Style/App.css'

import Header from './Header.js'

import Home from './Pages/Home.js'

import WhackAMole from './Pages/WhackAMole.js'
import Tictactoe from './Pages/Tictactoe.js'
import SnakeGame from './Pages/SnakeGame.js'
import TwoThousandFourtyEight from './Pages/TwoThousandFourtyEight.js'
import MemoryGame from './Pages/MemoryGame.js'
import RockPaperScissors from './Pages/RockPaperScissors.js'



import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <Router>
        {/* <Route path="">
          <Header path='/'/>
        </Route> */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tictactoe">
          <Tictactoe/>
        </Route>
        <Route exact path="/whackamole">
          <WhackAMole/>
        </Route>
        <Route exact path="/SnakeGame">
          <SnakeGame/>  
        </Route>
        <Route exact path="/2048">
          <TwoThousandFourtyEight/>
        </Route>
        <Route exact path="/MemoryGame">
          <MemoryGame/>
        </Route>
        <Route exact path="/RockPaperScissors">
          <RockPaperScissors/>
        </Route>
      </Router>
    </>
  );
}

export default App;
