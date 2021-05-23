import '../Style/App.css'

import Tictactoe from './Pages/Tictactoe.js'
import Home from './Pages/Home.js'
import Header from './Header.js'
import WhackAMole from './Pages/WhackAMole.js'

import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Route path="">
          <Header path='/'/>
        </Route>
        <Route exact path="/">
          <Home exact path='/'/>
        </Route>
        <Route exact path="/tictactoe">
          <Tictactoe exact path='/tictactoe'/>
        </Route>
        <Route exact path="/whackamole">
          <WhackAMole exact path='/whackamole'/>
        </Route>
      </Router>
    </>
  );
}

export default App;
