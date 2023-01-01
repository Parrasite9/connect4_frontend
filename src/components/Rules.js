import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';  
import RulesCSS from '../rules.module.css';



const Rules = (props) => {

    return (
        <div className={RulesCSS.rulesContainer}>
            <p><b>OBJECTIVE:</b> To be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally). 
            <br/><br/>
            <b>HOW TO PLAY:</b> Player 1 is assigned the start player. Players must alternate turns, and only one disc can be dropped in each turn. On your turn, click on a column to place one of your colored discs into any of the seven slots. If there are no discs in the column, then the disc will be palced at the bottom. If there is already a disc in the column, then the disc will be placed above any other existing discs. The game ends when there is a 4-in-a-row or a stalemate.</p>
            <div className={RulesCSS.close}>
            <Button variant="secondary"  onClick={()=> {props.setRules(false)}}>Close</Button>
            </div>
        </div>
        )
    }

    
export default Rules