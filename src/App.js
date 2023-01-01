import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from './components/Header.js'
import Add from './components/Add.js'
import Select from './components/SelectGame'
import Board from './components/Player1_Board'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Button} from 'react-bootstrap';  

// import css
import IndexCSS from './index.module.css';

const App = () => {

  let [games, setGames] = useState([])
  let [showAdd, setAdd] = useState(false)

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
    <>
    <Header setAdd={setAdd}/>
      <div key={games.id}>
        {
          showAdd === true ? <Add handleCreate={handleCreate} setAdd={setAdd}/> : null
        }
        <Select games={games}/>
        {games.map((game) => {
        return (
          <div key={game.id}>
          <Board game={game} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
          </div>
        )})}
      </div>
    </>
  )
}

export default App