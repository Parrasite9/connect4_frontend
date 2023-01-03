import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Form ,Button} from 'react-bootstrap';
import SelectCSS from '../select.module.css';

const Select = (props) => {
  const [games, setGame] = useState({...props.games})

    return (
      <div className={SelectCSS.searchContainer}>
        <div className={SelectCSS.searchbar}>
          {/* search bar to search for existing game names */}
          <InputGroup >
            <InputGroup.Text id="basic-addon1">Game Name</InputGroup.Text>
            <Form.Control
            placeholder="Game Name"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          </InputGroup>
          {/* cahnges state from app.js to hide selectgame.js */}
          <Button onClick={()=> props.setSelect(false)}>Cancel</Button>
        </div>
      {/* {props.games.map((games) => {
        return (
          <div className="game" key={games.id}>
          </div>
        )
    })} */}
      </div>
    )
}
//=================================================
// exports to app.js
export default Select