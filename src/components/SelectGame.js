import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';  

const Select = (props) => {
  const [games, setGame] = useState({...props.games})

    return (
      <>
      <DropdownButton id="dropdown-item-button" title="Select Game">
      {props.games.map((games) => {
        return (
          <div className="game" key={games.id}>
            <Dropdown.Item as="button" eventKey={games.game_name}>{games.game_name}</Dropdown.Item>
          </div>
        )
    })}
    </DropdownButton>
      </>
    )
}

export default Select