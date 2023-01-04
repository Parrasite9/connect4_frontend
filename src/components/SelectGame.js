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
  let paginationArray = []

  let searchRegEx = new RegExp(searchInput, 'gi')

  const updatePaginationArray = () => {
    paginationArray.length = 0
    for (let i = 0; i < props.games.length; i++) {
      if (props.games[i].game_name.search(searchRegEx) !== -1 || props.games[i].username1.search(searchRegEx) !== -1 || props.games[i].username2.search(searchRegEx) !== -1) {
        paginationArray.push(props.games[i].id) // if any of the posts have a result from searching with our regex, we will add it to the pagination array
      }
    }
    totalPages = Math.ceil(paginationArray.length / 5) // resetting the number of pages to reflect the search results.
  }

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
    updatePaginationArray()
    paginate()
  }

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const isGameOnPage = (gameID) => {
    updatePaginationArray()
    let hi = (currentPage * 5) - 1
    let lo = (currentPage * 5) - 5
    let gameIndex = paginationArray.indexOf(gameID)
    if (gameIndex >= lo && gameIndex <= hi) {
      return true
    } else {
      return false
    }
  }


  const paginate = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item key={i} value={i} active={i === currentPage} onClick={(e) => handlePageChange(e, i)}>
          {i}
        </Pagination.Item>,
      );
    }
    setPageElements(pages)
    updatePaginationArray()
  }

  useEffect(() => {
    paginate()
  }, [currentPage])

  return (
    <div className={SelectCSS.searchContainer}>
      <div className={SelectCSS.searchbar}>
        {/* search bar to search for existing game names */}
        <InputGroup >
          <InputGroup.Text id="basic-addon1">Game Name</InputGroup.Text>
          <Form.Control placeholder=" Search Game Name" aria-label="Username" aria-describedby="basic-addon1" onChange={handleSearch} />
        </InputGroup>
      </div>

      {/* start of display table */}
      <div className={SelectCSS.table}>
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
            if ((games.game_name.search(searchRegEx) !== -1 || games.username1.search(searchRegEx) !== -1 || games.username2.search(searchRegEx) !== -1) && isGameOnPage(games.id)) {
              return (
                <tr key={games.id} onClick={() => { props.setCurrentGameID(games.id); props.setPlayerSelect(true); props.setSelect(false) }} >
                  <td style={{cursor:"pointer"}}><u>{games.game_name}</u></td>
                  <td style={{cursor:"pointer"}}>{games.username1}</td>
                  <td style={{cursor:"pointer"}}>{games.username2}</td>
                </tr>
              )
            } else {
              return null
            }
          })}
        </tbody>
        </Table>
      </div>
      {/* add page numbers */}
      <div  className={SelectCSS.buttons}>
        <Pagination>
          {pageElements}
        </Pagination>
        {/* cahnges state from app.js to hide selectgame.js */}
        <Button  variant="secondary" onClick={() => props.setSelect(false)}>Close</Button>
      </div>
    </div>
  )
}
//=================================================
// exports to app.js
export default Select