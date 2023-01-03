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
            <div onClick={()=>{props.setAdd(true)}}>
                <p>Create Game</p>
            </div>
        </a>
        {/* select game allows user to search through exisiting games. Changes display state on App.js */}
        <a className={HeaderCSS.headerSelect}>
            <div onClick={()=>{props.setSelect(true)}}>
                <p>Select Game</p>
            </div>
        </a>
        {/* Displays the rules of how to Play connect 4 from Rules.js. Changes display state on App.js  */}
        <a href="#" className={HeaderCSS.headerRules}>
            <div onClick={()=>{props.setRules(true)}}>
                <p>Rules</p>
            </div>
        </a>
    </div>
    )
}
//=======================================
// export to App.js
export default Header