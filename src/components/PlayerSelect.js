import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';  
import PlayerCSS from '../player.module.css';

const Player = (props) => {

    return (
        //============================================
        // Only used to display rules of the game. 
        <div className={PlayerCSS.playerSelectDiv} key={props.game.id}>
            <h1>

            </h1>
            <div className={PlayerCSS.buttonDiv}>
                <button className={PlayerCSS.button} onClick={()=>{props.setP1(true);  props.setSelect(false); props.setPlayerSelect(false);}}>P1</button>
            </div>
            <div className={PlayerCSS.buttonDiv}>
                <button className={PlayerCSS.button} onClick={()=>{props.setP2(true); props.setSelect(false); props.setPlayerSelect(false);}}>P2</button>
            </div>
        </div>
        )
    }
//========================================
// exports to App.js
export default Player