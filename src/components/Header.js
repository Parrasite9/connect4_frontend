import {useState} from 'react'
import HeaderCSS from '../header.module.css';

const Header = (props) => {

  
    return (
    <header className={HeaderCSS.header}>
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
    </header>
    )
}

export default Header