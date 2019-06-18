import React from 'react';
import { Link } from "react-router-dom";



const Header = (props) => {
    const { listView } = props;
    return (
<>
        <header className="header">

            <ul className="list-unstyled float-right">

                <li>{listView ? <i className="gridIcon fas fa-grip-horizontal" onClick={props.onChangeLayout}></i>
                    : <i className="listIcon fas fa-th-list" onClick={props.onChangeLayout}></i>}</li>
                <li><i className="reloadIcon fas fa-redo" onClick={props.onReload}></i></li>
            </ul>
            <h1>{props.title}</h1>
            <Link to='/about'>About</Link>

           
        </header>
 
 
        </>
       

  )
}

export {
    Header
}
