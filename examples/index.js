import React from 'react';
import ReactDOM from 'react-dom';
import { InputComponent } from '../src/';
import loadAsset from './load-assets';

// change the windows to linux or osx for different themes
loadAsset('osx');

class Example extends React.Component{
    render(){
        return (
            <div style={{"width": "50%"}}>
                <InputComponent placeholder="Enter your name" width="200px;" type="password"/>
            </div>);
    }
}

ReactDOM.render(
    <Example ></Example>,
    document.getElementById('example')
)
