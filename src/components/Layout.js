import React from "react"; 
import { setConfig } from 'react-hot-loader';
setConfig({logLevel: 'no-errors-please'});  

export default ({ children }) => (<>{children}</>); 
