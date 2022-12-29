import {useState, UseEffect} from 'react'

const Add = (props) => {
    let emptyGame = { game_name: '', username1: '', username2: ''}
    const [game, setGame] = useState(emptyGame)
  
    // log the inputs
    const handleChange = (event) => {
      setGame({ ...game, [event.target.name]: event.target.value })
    }
    
  //   submit character with props handle
    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(game)
    }
  
    return (
      <>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Game Name: </label>
          <input type="text" value={game.game_name} name="game_name" onChange={handleChange} />
          <br /><br />
          <label htmlFor="players">Player 1 Username: </label>
          <input type="text" value={game.username1} name="username1"  onChange={handleChange} />
          <br /><br />
          <label htmlFor="type">Player 2 Username: </label>
          <input type="text" value={game.username2} name="username2"  onChange={handleChange} />
          <br /><br />
          <input type="submit" />
      </form>
      </>
    )
}

export default Add