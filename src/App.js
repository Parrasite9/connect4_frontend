import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from './components/Header.js'
import Add from './components/Add.js'
import Rules from './components/Rules.js'
import Select from './components/SelectGame'
import Player from './components/PlayerSelect.js'
import Board1 from './components/Player1_Board'
import Board2 from './components/Player2_Board'
import 'bootstrap/dist/css/bootstrap.min.css';

// import css
import IndexCSS from './index.module.css';

const App = () => {

  let [games, setGames] = useState([])
  let [showAdd, setAdd] = useState(false)
  let [showRules, setRules] = useState(false)
  let [showSelect, setSelect] = useState(false)
  let [currentGameID, setCurrentGameID] = useState('')
  let [playerSelect, setPlayerSelect] = useState(true)
  let [showP1, setP1] = useState(false)
  let [showP2, setP2] = useState(false)

  //=========================================================================
  //DELETE GAME
  const handleDelete = (event) => {
    axios.delete('https://connect4back.herokuapp.com/api/connect4/' + event.id).then((response) => {
      getGames();
    })
  }

  //=========================================================================
  //EDIT GAME
  const handleUpdate = (game) => {
    axios.put('https://connect4back.herokuapp.com/api/connect4/' + game.id, game).then((response) => {
      getGames();
    })
  }

  //=========================================================================
  //Create new game with players
  const handleCreate = (add) => {
    axios.post('https://connect4back.herokuapp.com/api/connect4', add).then((response) => {
      getGames();
    })
  }
  //=========================================================================
  //collect from database
  const getGames = () => {
    axios.get('https://connect4back.herokuapp.com/api/connect4').then((response) =>
      setGames(response.data),
      // , (err) => 
      // console.log(err)
    )
  }
  //=========================================================================
  //useEffect to collect from database
  useEffect(() => {
    getGames();
  }, [])

  return (
    <div className={IndexCSS.appContainer}>
      <Header setAdd={setAdd} setRules={setRules} setSelect={setSelect} setCurrentGameID={setCurrentGameID} setP1={setP1} setP2={setP2}/>
      <div key={games.id}>
        {
          showRules === true ? <Rules setRules={setRules}/> : null
        }
        {
          showAdd === true ? <Add handleCreate={handleCreate} setAdd={setAdd} /> : null
        }
        {
          showSelect === true ? <Select games={games} setSelect={setSelect} setCurrentGameID={setCurrentGameID} setPlayerSelect={setPlayerSelect}/> : null
        }
        {

        }
        {/* render game based on game ID selected from SelectGame.js */}
        {games.map((game) => {
          if (game.id === currentGameID) {
            return (
              <div key={game.id}>
                {/* Have player select P1 or P2, then render page */}
                {
                  playerSelect === true ? <Player game={game} setP1={setP1} setP2={setP2} setSelect={setSelect} setPlayerSelect={setPlayerSelect}/>: null
                }
                {/* show P1 page if true, else null */}
                {
                  showP1 === true? <Board1 game1={game} handleDelete={handleDelete} handleUpdate={handleUpdate} /> : null
                }
                {/* show P1 page if true, else null */}
                {
                  showP2 === true? <Board2 game2={game} handleDelete={handleDelete} handleUpdate={handleUpdate} /> : null
                }
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default App