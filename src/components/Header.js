import {useState} from 'react'
import HeaderCSS from '../header.module.css';

const Header = (props) => {
  
    return (
    // Connect4, not clickable and not needed for anything. just a design.
    <div className={HeaderCSS.header}>
        <div className={HeaderCSS.headerTitle}>
            <p>Connect4</p>
        </div>
        {/* create game will display the add.js component to CREATE something in database. Changes display state on App.js */}
        <a href="#" className={HeaderCSS.headerCreate}>
            <div onClick={()=>{props.setP1(false); props.setP2(false); props.setAdd(true); props.setSelect(false); props.setRules(false); props.setCurrentGameID('');}}>
                <p>Create Game</p>
            </div>
        </a>
        {/* select game allows user to search through exisiting games. Changes display state on App.js */}
        <a href="#" className={HeaderCSS.headerSelect}>
            <div onClick={()=>{props.setSelect(true); props.setP1(false); props.setP2(false);props.setAdd(false); props.setRules(false); props.setCurrentGameID('');}}>
                <p>Select Game</p>
            </div>
        </a>
        {/* Displays the rules of how to Play connect 4 from Rules.js. Changes display state on App.js  */}
        <a href="#" className={HeaderCSS.headerRules}>
            <div onClick={()=>{props.setRules(true); props.setSelect(false); props.setAdd(false)}}>
                <p>Rules</p>
            </div>
        </a>
    </div>
    )
}
//=======================================
// export to App.js
export default Header