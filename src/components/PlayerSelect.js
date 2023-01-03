import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';  
import PlayerCSS from '../player.module.css';

const Player = (props) => {

    return (
        //============================================
        // Only used to display rules of the game. 
        <div className={PlayerCSS.playerSelectDiv} key={props.game.id}>
            {/* div for message  */}
            <div>
                <h1>Select Your Username</h1>
            </div>
            {/* div for buttons */}
            <div className={PlayerCSS.buttonDiv}>
                <div>
                    <button className={PlayerCSS.buttonP1} onClick={()=>{props.setP1(true);  props.setSelect(false); props.setPlayerSelect(false);}}>{props.game.username1}</button>
                </div>
                <div>
                    <button className={PlayerCSS.buttonP2} onClick={()=>{props.setP2(true); props.setSelect(false); props.setPlayerSelect(false);}}>{props.game.username2}</button>
                </div>
            </div>
        </div>
        )
    }
//========================================
// exports to App.js
export default Player