import * as React from 'react';
import * as ReactDom from 'react-dom';

window.addEventListener('load',()=>{
    ReactDom.render(<header />, document.getElementById("#react__root"));
});
