import React from 'react';
import { Link } from "react-router-dom";
import { HomePage } from './pages/HomePage';


const Header = (props) => {
    const { listView } = props;
    return (

        <header className="header">

            <ul className="list-unstyled float-right">

                <li>{listView ? <i className="fas fa-grip-horizontal" onClick={props.onChangeLayout}></i>
                    : <i className="fas fa-th-list" onClick={props.onChangeLayout}></i>}</li>
                <li><i className="fas fa-redo" onClick={props.onReload}></i></li>
            </ul>
            <h1>{props.title}</h1>
            <Link to='/about'>About</Link>


        </header>






    )
}

export {
    Header
}
