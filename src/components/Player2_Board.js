import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';  
import BoardCSS from '../board.module.css';

const Board2 = (props) => {

    let [game, setGame] = useState({...props.game2})

    //================================================================
    //change color based on user choice
    const classHandle = (value) =>{
        if (value === 0){
            return `${BoardCSS.circle}`
        } else if (value === 1){
            return `${BoardCSS.circleRed}`
        } else if (value === 2){
            return `${BoardCSS.circleYellow}`
        }
    }
    //================================================================
    //pass in props handle function for update
    const handleSubmit = () => {
        props.handleUpdate(game);
      }
    //================================================================
    //pass in props handle function for delete
    const handleSubmitDelete = (event) =>{
        props.handleDelete(event);
    }
    //================================================================
    //Reset Game, change first player. Only works on current user turn!
    const handleReset = (game) =>{
        setGame({ ...game, winner: false, user1_turn: true, user2_turn: false, a1: 0, a2: 0, a3: 0, a4: 0, a5: 0, a6: 0, a7:0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7:0, c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0, c7:0, d1: 0, d2: 0, d3: 0, d4: 0, d5: 0, d6: 0, d7:0, e1: 0, e2: 0, e3: 0, e4: 0, e5: 0, e6: 0, e7:0, f1: 0, f2: 0, f3: 0, f4: 0, f5: 0, f6: 0, f7:0})
    }
    //================================================================
    //Change winn game state
    const handleWin = (game) => {
        setGame({...game, winner: true})
    }
    //================================================================
    //pass in handle function to edit column 1, change value in column, and change player
    const handleColumn1 = (game) =>{
        if(game.f1 === 0){
            setGame({ ...game, f1: 2, user2_turn: false, user1_turn: true})
            return;
        } else if (game.e1 === 0){
            setGame({ ...game, e1: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d1 === 0){
            setGame({ ...game, d1: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c1 === 0){
            setGame({ ...game, c1: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b1 === 0){
            setGame({ ...game, b1: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a1 === 0){
            setGame({ ...game, a1: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 2, change value in column, and change player
    const handleColumn2 = () =>{
        if(game.f2 === 0){
            setGame({ ...game, f2: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e2 === 0){
            setGame({ ...game, e2: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d2 === 0){
            setGame({ ...game, d2: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c2 === 0){
            setGame({ ...game, c2: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b2 === 0){
            setGame({ ...game, b2: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a2 === 0){
            setGame({ ...game, a2: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 3, change value in column, and change player
    const handleColumn3 = () =>{
        if(game.f3 === 0){
            setGame({ ...game, f3: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e3 === 0){
            setGame({ ...game, e3: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d3 === 0){
            setGame({ ...game, d3: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c3 === 0){
            setGame({ ...game, c3: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b3 === 0){
            setGame({ ...game, b3: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a3 === 0){
            setGame({ ...game, a3: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 4, change value in column, and change player
    const handleColumn4 = () =>{
        if(game.f4 === 0){
            setGame({ ...game, f4: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e4 === 0){
            setGame({ ...game, e4: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d4 === 0){
            setGame({ ...game, d4: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c4 === 0){
            setGame({ ...game, c4: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b4 === 0){
            setGame({ ...game, b4: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a4 === 0){
            setGame({ ...game, a4: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 5, change value in column, and change player
    const handleColumn5 = () =>{
        if(game.f5 === 0){
            setGame({ ...game, f5: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e5 === 0){
            setGame({ ...game, e5: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d5 === 0){
            setGame({ ...game, d5: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c5 === 0){
            setGame({ ...game, c5: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b5 === 0){
            setGame({ ...game, b5: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a5 === 0){
            setGame({ ...game, a5: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 6, change value in column, and change player
    const handleColumn6 = () =>{
        if(game.f6 === 0){
            setGame({ ...game, f6: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e6 === 0){
            setGame({ ...game, e6: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d6 === 0){
            setGame({ ...game, d6: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c6 === 0){
            setGame({ ...game, c6: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b6 === 0){
            setGame({ ...game, b6: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a6 === 0){
            setGame({ ...game, a6: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 7, change value in column, and change player
    const handleColumn7 = () =>{
        if(game.f7 === 0){
            setGame({ ...game, f7: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.e7 === 0){
            setGame({ ...game, e7: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.d7 === 0){
            setGame({ ...game, d7: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.c7 === 0){
            setGame({ ...game, c7: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.b7 === 0){
            setGame({ ...game, b7: 2, user2_turn: false, user1_turn: true});
            return;
        } else if (game.a7 === 0){
            setGame({ ...game, a7: 2, user2_turn: false, user1_turn: true});
            return;
        } 
    }
    //================================================================
    // use effect to submit after state change. Must be seperate from other "useeffect"
    useEffect(() => {
        handleSubmit(game);
      }, [game]);
    //================================================================
    // use effect will populate state change ater changes made on Player1 page
      useEffect(() => {
        setGame(props.game2);
      }, [props.game2.user1_turn, props.game2.user2_turn, props.game2.winner]);
     //================================================================
    //   display on page
        return (
        <>
        <div className={BoardCSS.container} key={game.id}>
            {/* display message saying whose turn it is */}
            <div className={BoardCSS.message}>
                {
                    game.user2_turn === true ? <h3>Select Option Below</h3>: <h3>Opponent Turn</h3>
                }
                {
                    game.winner === true ? <h1>There has been a Winner!</h1>: null
                }
                
                <div>
                    {/* display game legend */}
                    <div className={BoardCSS.legend}>
                        <p>Your Color:  </p><div className={BoardCSS.P2legend}/>
                        <p>Opponent Color:  </p><div className={BoardCSS.P1legend}/>
                    </div>
                    {/* Buttons to manage game*/}
                    <Button className={BoardCSS.deleteBtn} variant="danger" size="sm"  onClick={() => {handleSubmitDelete(game)}}>Delete Game</Button>
                    <Button className={BoardCSS.resetBtn} variant="warning" size="sm" onClick={() => {handleReset(game)}}>Reset/Change Start Player</Button>
                    <Button className={BoardCSS.winBtn} variant="success" size="sm" onClick={() => {handleWin(game)}}>Press to Win!</Button>
                </div>
            </div>
        <div className={BoardCSS.boardContainer}>
                        {/* buttons to change state of game in each column of connect4g game */}
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn1(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn2(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn3(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn4(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn5(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn6(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user2_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user2_turn === true){handleColumn7(game)}}}> &#8659; </button>
            {/* start of connect4 board */}
            <div id = "a1" className={`${classHandle(game.a1)}`} name="a1"/>    
            <div id = "a2" className={`${classHandle(game.a2)}`} name="a2"/>   
            <div id = "a3" className={`${classHandle(game.a3)}`} name="a3"/>
            <div id = "a4" className={`${classHandle(game.a4)}`} name="a4"/>
            <div id = "a5" className={`${classHandle(game.a5)}`} name="a5"/>    
            <div id = "a6" className={`${classHandle(game.a6)}`} name="a6"/>
            <div id = "a7" className={`${classHandle(game.a7)}`} name="a7"/>
            <div id = "b1" className={`${classHandle(game.b1)}`} name="b1"/>
            <div id = "b2" className={`${classHandle(game.b2)}`} name="b2"/>
            <div id = "b3" className={`${classHandle(game.b3)}`} name="b3"/>
            <div id = "b4" className={`${classHandle(game.b4)}`} name="b4"/>
            <div id = "b5" className={`${classHandle(game.b5)}`} name="b5"/>
            <div id = "b6" className={`${classHandle(game.b6)}`} name="b6"/>
            <div id = "b7" className={`${classHandle(game.b7)}`} name="b7"/>
            <div id = "c1" className={`${classHandle(game.c1)}`} name="c1"/>
            <div id = "c2" className={`${classHandle(game.c2)}`} name="c2"/>
            <div id = "c3" className={`${classHandle(game.c3)}`} name="c3"/>
            <div id = "c4" className={`${classHandle(game.c4)}`} name="c4"/>
            <div id = "c5" className={`${classHandle(game.c5)}`} name="c5"/>
            <div id = "c6" className={`${classHandle(game.c6)}`} name="c6"/>
            <div id = "c7" className={`${classHandle(game.c7)}`} name="c7"/>
            <div id = "d1" className={`${classHandle(game.d1)}`} name="d1"/>
            <div id = "d2" className={`${classHandle(game.d2)}`} name="d2"/>
            <div id = "d3" className={`${classHandle(game.d3)}`} name="d3"/>
            <div id = "d4" className={`${classHandle(game.d4)}`} name="d4"/>
            <div id = "d5" className={`${classHandle(game.d5)}`} name="d5"/>
            <div id = "d6" className={`${classHandle(game.d6)}`} name="d6"/>
            <div id = "d7" className={`${classHandle(game.d7)}`} name="d7"/>
            <div id = "e1" className={`${classHandle(game.e1)}`} name="e1"/>
            <div id = "e2" className={`${classHandle(game.e2)}`} name="e2"/>
            <div id = "e3" className={`${classHandle(game.e3)}`} name="e3"/>
            <div id = "e4" className={`${classHandle(game.e4)}`} name="e4"/>
            <div id = "e5" className={`${classHandle(game.e5)}`} name="e5"/>
            <div id = "e6" className={`${classHandle(game.e6)}`} name="e6"/>
            <div id = "e7" className={`${classHandle(game.e7)}`} name="e7"/>
            <div id = "f1" className={`${classHandle(game.f1)}`} name="f1"/>
            <div id = "f2" className={`${classHandle(game.f2)}`} name="f2"/>
            <div id = "f3" className={`${classHandle(game.f3)}`} name="f3"/>
            <div id = "f4" className={`${classHandle(game.f4)}`} name="f4"/>
            <div id = "f5" className={`${classHandle(game.f5)}`} name="f5"/>
            <div id = "f6" className={`${classHandle(game.f6)}`} name="f6"/>
            <div id = "f7" className={`${classHandle(game.f7)}`} name="f7"/>
        </div>
        </div>
        </>
      )
  }
//==========================================================================
//   export to App.js
  export default Board2