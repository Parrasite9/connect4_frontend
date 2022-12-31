import {useState, useEffect} from 'react'
import BoardCSS from '../board.module.css';

const Board = (props) => {

    let [game, setGame] = useState({...props.game})


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
    //pass in handle function to edit column 3
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

    useEffect(() => {
        handleSubmit()
      }, [game]);

        return (
        <>
        <div key={game.id}>
            <div>
            {
                game.user1_turn === true ? <h1>Select Option Below</h1>: <h1>Player 2 Turn</h1>
            }
            </div>
            <div>
                <button onClick={() => {handleSubmitDelete(game)}}>Delete Game</button>
            </div>
        <div className={BoardCSS.boardContainer}>
            <div className={BoardCSS.z1}>
                <button className={`${BoardCSS.circle_z1} ${BoardCSS.button}`} data-value={game.z1} onClick={ () => { handleColumn1(game)}}> 1
                </button>
            </div>
            <div className={BoardCSS.z2}>
            <button className={`${BoardCSS.circle_z2} ${BoardCSS.button}`} data-value={game.z2} onClick={ () => {handleColumn2(game)}}> 2
                </button>
            </div>
            <div className={BoardCSS.z3}>
            <button className={`${BoardCSS.circle_z3} ${BoardCSS.button}`} onClick={ () => {handleColumn3(game)}}> 3
                </button>
            </div>
            <div className={BoardCSS.z4}>
            <button className={`${BoardCSS.circle_z4} ${BoardCSS.button}`} onClick={ () => {handleColumn4(game)}}> 4
                </button>
            </div>
            <div className={BoardCSS.z5}>
            <button className={`${BoardCSS.circle_z5} ${BoardCSS.button}`} onClick={ () => {handleColumn5(game)}}> 5
                </button>
            </div>
            <div className={BoardCSS.z6}>
            <button className={`${BoardCSS.circle_z6} ${BoardCSS.button}`} onClick={ () => {handleColumn6(game)}}> 6
                </button>
            </div>
            <div className={BoardCSS.z7}>
            <button className={`${BoardCSS.circle_z7} ${BoardCSS.button}`} onClick={ () => {handleColumn7(game)}}> 7
                </button>
            </div>
            <div className={BoardCSS.a1}>
                <div id = "a1" className={`${BoardCSS.circle_a1} ${BoardCSS.circle}`} name="a1" data-value={game.a1}>
                </div>
            </div>
            <div className={BoardCSS.a2}>
                <div id = "a2" className={`${BoardCSS.circle_a2} ${BoardCSS.circle}`} name="a2" data-value={game.a2}>
                </div>
            </div>
            <div className={BoardCSS.a3}>
                <div id = "a3" className={`${BoardCSS.circle_a3} ${BoardCSS.circle}`} name="a3" data-value={game.a3}>
                </div>
            </div>
            <div className={BoardCSS.a4}>
                <div id = "a4" className={`${BoardCSS.circle_a4} ${BoardCSS.circle}`} name="a4" data-value={game.a4}>
                </div>
            </div>
            <div className={BoardCSS.a5}>
                <div id = "a5" className={`${BoardCSS.circle_a5} ${BoardCSS.circle}`} name="a5" data-value={game.a5}>
                </div>
            </div>
            <div className={BoardCSS.a6}>
                <div id = "a6" className={`${BoardCSS.circle_a6} ${BoardCSS.circle}`} name="a6" data-value={game.a6}>
                </div>
            </div>
            <div className={BoardCSS.a7}>
                <div id = "a7" className={`${BoardCSS.circle_a7} ${BoardCSS.circle}`} name="a7" data-value={game.a7}>
                </div>
            </div>
            <div className={BoardCSS.b1}>
                <div id = "b1" className={`${BoardCSS.circle_b1} ${BoardCSS.circle}`} name="b1" data-value={game.b1}>
                </div>
            </div>
            <div className={BoardCSS.b2}>
                <div id = "b2" className={`${BoardCSS.circle_b2} ${BoardCSS.circle}`} name="b2" data-value={game.b2}>
                </div>
            </div>
            <div className={BoardCSS.b3}>
                <div id = "b3" className={`${BoardCSS.circle_b3} ${BoardCSS.circle}`} name="b3" data-value={game.b3}>
                </div>
            </div>
            <div className={BoardCSS.b4}>
                <div id = "b4" className={`${BoardCSS.circle_b4} ${BoardCSS.circle}`} name="b4" data-value={game.b4}>
                </div>
            </div>
            <div className={BoardCSS.b5}>
                <div id = "b5" className={`${BoardCSS.circle_b5} ${BoardCSS.circle}`} name="b5" data-value={game.b5}>
                </div>
            </div>
            <div className={BoardCSS.b6}>
                <div id = "b6" className={`${BoardCSS.circle_b6} ${BoardCSS.circle}`} name="b6" data-value={game.b6}>
                </div>
            </div>
            <div className={BoardCSS.b7}>
                <div id = "b7" className={`${BoardCSS.circle_b7} ${BoardCSS.circle}`} name="b7" data-value={game.b7}>
                </div>
            </div>
            <div className={BoardCSS.c1}>
                <div id = "c1" className={`${BoardCSS.circle_c1} ${BoardCSS.circle}`} name="c1" data-value={game.c1}>
                </div>
            </div>
            <div className={BoardCSS.c2}>
                <div id = "c2" className={`${BoardCSS.circle_c2} ${BoardCSS.circle}`} name="c2" data-value={game.c2}>
                </div>
            </div>
            <div className={BoardCSS.c3}>
                <div id = "c3" className={`${BoardCSS.circle_c3} ${BoardCSS.circle}`} name="c3" data-value={game.c3}>
                </div>
            </div>
            <div className={BoardCSS.c4}>
                <div id = "c4" className={`${BoardCSS.circle_c4} ${BoardCSS.circle}`} name="c4" data-value={game.c4}>
                </div>
            </div>
            <div className={BoardCSS.c5}>
                <div id = "c5" className={`${BoardCSS.circle_c5} ${BoardCSS.circle}`} name="c5" data-value={game.c5}>
                </div>
            </div>
            <div className={BoardCSS.c6}>
                <div id = "c6" className={`${BoardCSS.circle_c6} ${BoardCSS.circle}`} name="c6" data-value={game.c6}>
                </div>
            </div>
            <div className={BoardCSS.c7}>
                <div id = "c7" className={`${BoardCSS.circle_c7} ${BoardCSS.circle}`} name="c7" data-value={game.c7}>
                </div>
            </div>
            <div className={BoardCSS.d1}>
                <div id = "d1" className={`${BoardCSS.circle_d1} ${BoardCSS.circle}`} name="d1" data-value={game.d1}>
                </div>
            </div>
            <div className={BoardCSS.d2}>
                <div id = "d2" className={`${BoardCSS.circle_d2} ${BoardCSS.circle}`} name="d2" data-value={game.d2}>
                </div>
            </div>
            <div className={BoardCSS.d3}>
                <div id = "d3" className={`${BoardCSS.circle_d3} ${BoardCSS.circle}`} name="d3" data-value={game.d3}>
                </div>
            </div>
            <div className={BoardCSS.d4}>
                <div id = "d4" className={`${BoardCSS.circle_d4} ${BoardCSS.circle}`} name="d4" data-value={game.d4}>
                </div>
            </div>
            <div className={BoardCSS.d5}>
                <div id = "d5" className={`${BoardCSS.circle_d5} ${BoardCSS.circle}`} name="d5" data-value={game.d5}>
                </div>
            </div>
            <div className={BoardCSS.d6}>
                <div id = "d6" className={`${BoardCSS.circle_d6} ${BoardCSS.circle}`} name="d6" data-value={game.d6}>
                </div>
            </div>
            <div className={BoardCSS.d7}>
                <div id = "d7" className={`${BoardCSS.circle_d7} ${BoardCSS.circle}`} name="d7" data-value={game.d7}>
                </div>
            </div>
            <div className={BoardCSS.e1}>
                <div id = "e1" className={`${BoardCSS.circle_e1} ${BoardCSS.circle}`} name="e1" data-value={game.e1}>
                </div>
            </div>
            <div className={BoardCSS.e2}>
                <div id = "e2" className={`${BoardCSS.circle_e2} ${BoardCSS.circle}`} name="e2" data-value={game.e2}>
                </div>
            </div>
            <div className={BoardCSS.e3}>
                <div id = "e3" className={`${BoardCSS.circle_e3} ${BoardCSS.circle}`} name="e3" data-value={game.e3}>
                </div>
            </div>
            <div className={BoardCSS.e4}>
                <div id = "e4" className={`${BoardCSS.circle_e4} ${BoardCSS.circle}`} name="e4" data-value={game.e4}>
                </div>
            </div>
            <div className={BoardCSS.e5}>
                <div id = "e5" className={`${BoardCSS.circle_e5} ${BoardCSS.circle}`} name="e5" data-value={game.e5}>
                </div>
            </div>
            <div className={BoardCSS.e6}>
                <div id = "e6" className={`${BoardCSS.circle_e6} ${BoardCSS.circle}`} name="e6" data-value={game.e6}>
                </div>
            </div>
            <div className={BoardCSS.e7}>
                <div id = "e7" className={`${BoardCSS.circle_e7} ${BoardCSS.circle}`} name="e7" data-value={game.e7}>
                </div>
            </div>
            <div className={BoardCSS.f1}>
                <div id = "f1" className={`${BoardCSS.circle_f1} ${BoardCSS.circle}`} name="f1" data-value={game.f1}>
                </div>
            </div>
            <div className={BoardCSS.f2}>
                <div id = "f2" className={`${BoardCSS.circle_f2} ${BoardCSS.circle}`} name="f2" data-value={game.f2}>
                </div>
            </div>
            <div className={BoardCSS.f3}>
                <div id = "f3" className={`${BoardCSS.circle_f3} ${BoardCSS.circle}`} name="f3" data-value={game.f3}>
                </div>
            </div>
            <div className={BoardCSS.f4}>
                <div id = "f4" className={`${BoardCSS.circle_f4} ${BoardCSS.circle}`} name="f4" data-value={game.f4}>
                </div>
            </div>
            <div className={BoardCSS.f5}>
                <div id = "f5" className={`${BoardCSS.circle_f5} ${BoardCSS.circle}`} name="f5" data-value={game.f5}>
                </div>
            </div>
            <div className={BoardCSS.f6}>
                <div id = "f6" className={`${BoardCSS.circle_f6} ${BoardCSS.circle}`} name="f6" data-value={game.f6}>
                </div>
            </div>
            <div className={BoardCSS.f7}>
                <div id = "f7" className={`${BoardCSS.circle_f7} ${BoardCSS.circle}`} data-value={game.f7}>
                </div>
            </div>
        </div>
        </div>
        </>
      )
  }
  
  export default Board