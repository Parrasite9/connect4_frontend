import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button, Table } from 'react-bootstrap';
import SelectCSS from '../select.module.css';

const Select = (props) => {
  const [games, setGame] = useState({ ...props.games })
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div className={SelectCSS.searchContainer}>
      <div className={SelectCSS.searchbar}>
        {/* search bar to search for existing game names */}
        <InputGroup >
          <InputGroup.Text id="basic-addon1">Game Name</InputGroup.Text>
          <Form.Control
            placeholder="Game Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleSearch} />
        </InputGroup>
        {/* cahnges state from app.js to hide selectgame.js */}
        <Button onClick={() => props.setSelect(false)}>Cancel</Button>
      </div>

      {/* start of display table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Player 1</th>
            <th>Player 2</th>
          </tr>
        </thead>
        <tbody>
          {/* map over database "game name, username1, and username2 in table" */}
          {props.games.map((games) => {
            let searchRegEx = new RegExp(searchInput, 'gi')
            if (games.game_name.search(searchRegEx) != -1 || games.username1.search(searchRegEx) != -1 || games.username2.search(searchRegEx) != -1) {
              return (
                <tr key={games.id} onClick={() => props.setCurrentGameID(games.id)} >
                  <td>{games.game_name}</td>
                  <td>{games.username1}</td>
                  <td>{games.username2}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
    </div>
  )
}
//=================================================
// exports to app.js
export default Select