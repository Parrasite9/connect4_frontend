import {useState} from 'react'
import HeaderCSS from '../header.module.css';

const Header = (props) => {

  
    return (
    <div className={HeaderCSS.header}>
        <div className={HeaderCSS.headerTitle}>
            <p>Connect4</p>
        </div>
        <a href="#" className={HeaderCSS.headerCreate}>
        <div onClick={()=>{props.setAdd(true)}}>
            <p>Create Game</p>
        </div>
        </a>
        <div className={HeaderCSS.headerSelect}>
            <p>Select Game</p>
        </div>
        <a href="#" className={HeaderCSS.headerRules}>
        <div onClick={()=>{props.setRules(true)}}>
            <p>Rules</p>
        </div>
        </a>
    </div>
    )
}

export default Header