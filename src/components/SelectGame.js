// import {useState, UseEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';  

const Select = (props) => {


    return (
      <>
      <DropdownButton id="dropdown-item-button" title="Select Game">
      {props.game.map((game) => {
        return (
          <div className="game" key={game.id}>
            <Dropdown.Item as="button" eventKey={game.game_name}>{game.game_name}</Dropdown.Item>
          </div>
        )
    })}
    </DropdownButton>
      </>
    )
}

export default Select