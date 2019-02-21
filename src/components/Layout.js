import React from "react"; 
import { Link } from "gatsby"
import { setConfig } from 'react-hot-loader';
import 'src/scss/main.scss';

setConfig({logLevel: 'no-errors-please'});  

export default ({ children }) => (<>
    <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li> 
    </ul>
    {children} 
</>); 
