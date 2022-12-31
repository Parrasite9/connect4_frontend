import {useState} from 'react'
import BoardCSS from '../board.module.css';

const Board = (props) => {

    let emptyGame = { a1: '', a2: '', a3: '', a4: '', a5: '', a6: '', a7: '', b1: '', b2: '', b3: '', b4: '', b5: '', b6: '', b7: '', c1: '', c2: '', c3: '', c4: '', c5: '', c6: '', c7: '', d1: '', d2: '', d3: '', d4: '', d5: '', d6: '', d7: '', e1: '', e2: '', e3: '', e4: '', e5: '', e6: '', e7: '', f1: '', f2: '', f3: '', f4: '', f5: '', f6: '', f7: ''}

    const [game, setGame] = useState({...props.game})

    const handleSubmit = () => {
        // event.preventDefault()
        props.handleUpdate(game)
      }

    // const handleChange = (event) => {
    //     console.log(game);
    //     setGame({ ...game, [event.target.name]: event.target.getAttribute('data-value') })
    //     handleSubmit();
    // }

    const handleColumn1 = (game) =>{
        if(game.f1 === 0){
            console.log("f1");
            // document.getElementById("f1").setAttribute("data-value", 1);
            setGame({ ...game, f1: 1 })
            console.log(game)
            handleSubmit();
        } else if (game.e1 === 0){
            console.log("e1");
            document.getElementById("e1").setAttribute("data-value", 1);

        } else if (game.d1 === 0){
            console.log("d1");
            document.getElementById("d1").setAttribute("data-value", 1);

        } else if (game.c1 === 0){
            console.log("c1");
            document.getElementById("c1").setAttribute("data-value", 1);

        } else if (game.b1 === 0){
            console.log("b1");
            document.getElementById("b1").setAttribute("data-value", 1);

        } else if (game.a1 === 0){
            console.log("a1");
            document.getElementById("a1").setAttribute("data-value", 1);

        } else {
            console.log("uh oh")
        }
    }
    
    const handleColumn2 = () =>{

    }
    const handleColumn3 = () =>{

    }
    const handleColumn4 = () =>{

    }
    const handleColumn5 = () =>{

    }
    const handleColumn6 = () =>{

    }
    const handleColumn7 = () =>{

    }

        return (
        <>
        {props.game.map((game) => {
        return (
        <div className={BoardCSS.boardContainer} key={game.id}>
            <div className={BoardCSS.z1}>
                <button className={`${BoardCSS.circle_z1} ${BoardCSS.button}`} data-value={game.z1} onClick={ () => {handleColumn1(game); console.log(game);}}> 1
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
        )
        })}
        </>
      )
  }
  
  export default Board