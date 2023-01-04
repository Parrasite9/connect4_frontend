import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button, Table, Pagination } from 'react-bootstrap';
import SelectCSS from '../select.module.css';

const Select = (props) => {
  // const [games, setGame] = useState({ ...props.games })
  const [searchInput, setSearchInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageElements, setPageElements] = useState([])
  let totalPages = Math.ceil(props.games.length / 5)
  let recordIndex = []

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
    console.log(props.games.length);
  }

  const handlePageChange = (event, pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber)
    // console.log(currentPage);
  }


  const paginate = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      console.log('making pages' + i);
      pages.push(
        <Pagination.Item key={i} value={i} active={i === currentPage} onClick={(e) => handlePageChange(e, i)}>
          {i}
        </Pagination.Item>,
      );
    }
    setPageElements(pages)
  }

  useEffect(() => {
    paginate()
  }, [])

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
        <Button onClick={() => props.setSelect(false)}>Close</Button>
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
          {props.games.map((games, i) => {
            let searchRegEx = new RegExp(searchInput, 'gi')
            if (games.game_name.search(searchRegEx) !== -1 || games.username1.search(searchRegEx) !== -1 || games.username2.search(searchRegEx) !== -1) {
              return (
                <tr key={games.id} onClick={() => props.setCurrentGameID(games.id)} >
                  <td>{games.game_name}</td>
                  <td>{games.username1}</td>
                  <td>{games.username2}</td>
                </tr>
              )
            } else {
              return null
            }
          })}
        </tbody>
      </Table>
      <Pagination>
        {pageElements}
      </Pagination>
    </div>
  )
}
//=================================================
// exports to app.js
export default Select