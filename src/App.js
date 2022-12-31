import axios from 'axios'
import {useState, useEffect} from 'react'

import Add from './components/Add.js'
import Edit from './components/Edit'
import Select from './components/SelectGame'
import Board from './components/Player1_Board'

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Button} from 'react-bootstrap';  

// import css
import IndexCSS from './index.module.css';

const App = () => {

  let [game, setGame] = useState([])

  //=========================================================================
  //eDIT GAME
  const handleUpdate = (editGame) => {
    axios.put('https://connect4back.herokuapp.com/api/connect4' + editGame.id, editGame).then((response) => {
      getGame()
      })
  }

  //=========================================================================
  //Create new game with players
    const handleCreate = (add) => {
      axios.post('https://connect4back.herokuapp.com/api/connect4', add).then((response) => {
          getGame()
        })
    }
 //=========================================================================
 //collect from database
  const getGame = () => {
    axios.get('https://connect4back.herokuapp.com/api/connect4').then((response) => 
    setGame(response.data), (err) => 
    console.log(err))
  }
 //=========================================================================
 //useEffect to collect from database
  useEffect(() => {
    getGame()
  }, [])


  return (
    <>
    <h1>Connect4</h1>
      <div key={game.id}>
        <Add handleCreate={handleCreate}/>
        <Select game={game}/>
        <Edit />
        <Board handleUpdate={handleUpdate} game={game}/>
      </div>
    </>
  )
}

export default App