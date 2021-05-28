import '../Style/App.css'

import '../Style/Header.css'

import Icondefault from '../Images/title/game-hub-icon-default.png'
import '../Images/title/game-hub-icon-hover.png'

import '../Images/title/game-hub-text-default.png'
import '../Images/title/game-hub-text-hover.png'

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Game-Hub-Title">
        <div className="Title-icon"></div>
        <img src={Icondefault}/>
        <div className="Title-text"></div>
          {/* <img className='Title-icon' alt=""/> */}
          <h1> This is the header</h1>
        </div>
      </div>


    </>
  );
}

export default Header;
