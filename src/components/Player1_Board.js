import {useState, useEffect} from 'react'
import BoardCSS from '../board.module.css';

const Board1 = (props) => {

    let [game, setGame] = useState({...props.game1})

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
    const handleSubmit = (event) => {
        props.handleUpdate(event);
      }
    //================================================================
    //pass in props handle function for delete
    const handleSubmitDelete = (event) =>{
        props.handleDelete(event);
    }
    //================================================================
    //pass in handle function to edit column 1
    const handleColumn1 = (game) =>{
        if(game.f1 === 0){
            setGame({ ...game, f1: 1, user1_turn: false, user2_turn: true})
            return;
        } else if (game.e1 === 0){
            setGame({ ...game, e1: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d1 === 0){
            setGame({ ...game, d1: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c1 === 0){
            setGame({ ...game, c1: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b1 === 0){
            setGame({ ...game, b1: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a1 === 0){
            setGame({ ...game, a1: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 2
    const handleColumn2 = () =>{
        if(game.f2 === 0){
            setGame({ ...game, f2: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e2 === 0){
            setGame({ ...game, e2: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d2 === 0){
            setGame({ ...game, d2: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c2 === 0){
            setGame({ ...game, c2: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b2 === 0){
            setGame({ ...game, b2: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a2 === 0){
            setGame({ ...game, a2: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 3
    const handleColumn3 = () =>{
        if(game.f3 === 0){
            setGame({ ...game, f3: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e3 === 0){
            setGame({ ...game, e3: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d3 === 0){
            setGame({ ...game, d3: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c3 === 0){
            setGame({ ...game, c3: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b3 === 0){
            setGame({ ...game, b3: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a3 === 0){
            setGame({ ...game, a3: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 4
    const handleColumn4 = () =>{
        if(game.f4 === 0){
            setGame({ ...game, f4: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e4 === 0){
            setGame({ ...game, e4: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d4 === 0){
            setGame({ ...game, d4: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c4 === 0){
            setGame({ ...game, c4: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b4 === 0){
            setGame({ ...game, b4: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a4 === 0){
            setGame({ ...game, a4: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 5
    const handleColumn5 = () =>{
        if(game.f5 === 0){
            setGame({ ...game, f5: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e5 === 0){
            setGame({ ...game, e5: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d5 === 0){
            setGame({ ...game, d5: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c5 === 0){
            setGame({ ...game, c5: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b5 === 0){
            setGame({ ...game, b5: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a5 === 0){
            setGame({ ...game, a5: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 6
    const handleColumn6 = () =>{
        if(game.f6 === 0){
            setGame({ ...game, f6: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e6 === 0){
            setGame({ ...game, e6: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d6 === 0){
            setGame({ ...game, d6: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c6 === 0){
            setGame({ ...game, c6: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b6 === 0){
            setGame({ ...game, b6: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a6 === 0){
            setGame({ ...game, a6: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }
    //================================================================
    //pass in handle function to edit column 7
    const handleColumn7 = () =>{
        if(game.f7 === 0){
            setGame({ ...game, f7: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.e7 === 0){
            setGame({ ...game, e7: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.d7 === 0){
            setGame({ ...game, d7: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.c7 === 0){
            setGame({ ...game, c7: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.b7 === 0){
            setGame({ ...game, b7: 1, user1_turn: false, user2_turn: true});
            return;
        } else if (game.a7 === 0){
            setGame({ ...game, a7: 1, user1_turn: false, user2_turn: true});
            return;
        } 
    }

    // use effect to submit after state change
    useEffect(() => {
        handleSubmit(game);
      }, [game]);

      useEffect(() => {
        setGame(props.game1);
      }, [props.game1.user1_turn, props.game1.user2_turn]);

    //   display on page
        return (
        <>
        <div className={BoardCSS.container} key={game.id}>
            <div className={BoardCSS.message}>
            {
                game.user1_turn === true ? <h1>Select Option Below</h1>: <h1>Opponent Turn</h1>
            }
            </div>
            <div>
                <button onClick={() => {handleSubmitDelete(game)}}>Delete Game</button>
            </div>
        <div className={BoardCSS.boardContainer}>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn1(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn2(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn3(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn4(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn5(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn6(game)}}}> &#8659; </button>
            <button className={`${BoardCSS.button} ${game.user1_turn === false? BoardCSS.buttonNull : null }`} onClick={ () => {if(game.user1_turn === true){handleColumn7(game)}}}> &#8659; </button>
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
  
  export default Board1