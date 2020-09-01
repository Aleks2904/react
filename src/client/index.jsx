import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Header} from './../shared/header';

window.addEventListener('load',()=>{
    ReactDom.hydrate(<Header />, document.getElementById("react__root"));
});
