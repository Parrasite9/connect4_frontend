import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';  
import RulesCSS from '../rules.module.css';

const Player = (props) => {

    return (
        //============================================
        // Only used to display rules of the game. 
        <div key={props.game.id}>
            <Button onClick={()=>{props.setP1(true);  props.setSelect(false); props.setPlayerSelect(false);}}>P1</Button>
            <Button onClick={()=>{props.setP2(true); props.setSelect(false); props.setPlayerSelect(false);}}>P2</Button>
        </div>
        )
    }
//========================================
// exports to App.js
export default Player