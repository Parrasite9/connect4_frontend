import axios from 'axios'
import {useState, useEffect} from 'react'

import Add from './components/Add.js'
import Edit from './components/Edit'

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Button} from 'react-bootstrap';  

// import css
import IndexCSS from './index.module.css';

const App = () => {

  let [game, setGame] = useState([])

  const getGame = () => {
    axios.get('http://localhost:8000/api/game').then((response) => 
    setGame(response.data), (err) => 
    console.log(err))
  }

  useEffect(() => {
    getGame()
  }, [])


  return (
    <>
      <h1>Hello World</h1>
      <Add />
      <Edit />
    </>
  )
}

export default App