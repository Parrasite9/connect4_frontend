import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';  
import AddCSS from '../add.module.css';

const Add = (props) => {
    let emptyGame = { game_name: '', username1: '', username2: ''}
    const [game, setGame] = useState(emptyGame)

  //================================================================
  //   submit character with props handle
    const handleChange = (event) => {
      setGame({ ...game, [event.target.name]: event.target.value })
    }
  //================================================================
  //   submit character with props handle
    const handleSubmit = (event) => {
      event.preventDefault();
      props.handleCreate(game);
      setGame(emptyGame);
      props.setAdd(false)
    }
  
    return (
      <div className={AddCSS.formContainer}>
        <div className={AddCSS.form}>
          {/* Form only requires username1, username2, and game name to submit entries. The rest will popualte defualt values in th API */}
        <Form onSubmit={handleSubmit} >
          <Form.Label htmlFor="name"><b>Game Name: </b></Form.Label>
          <Form.Control type="text" value={game.game_name} name="game_name" onChange={handleChange} />
          <br /><br />
          <Form.Label htmlFor="players"><b>Player 1 Username: </b></Form.Label>
          <Form.Control type="text" value={game.username1} name="username1"  onChange={handleChange} />
          <br /><br />
          <Form.Label htmlFor="type"><b>Player 2 Username: </b></Form.Label>
          <Form.Control type="text" value={game.username2} name="username2"  onChange={handleChange} />
          <div  className={AddCSS.submit}>
            {/* submit character with props handle */}
            <Button variant="success" type="submit">Submit</Button>
          </div>
          
        </Form>
        <div className={AddCSS.cancel}>
          {/* cancel button to exit out of add.js */}
          <Button variant="secondary" onClick={()=>{props.setAdd(false)}}>Cancel</Button>
        </div>
      </div>
      </div>
    )
}
//====================================
// export to app.js
export default Add