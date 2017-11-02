import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from '../src/';

class Example extends React.Component{
    render(){
        return <Hello compiler="TypeScript" framework="React" />
    }
}

ReactDOM.render(
    <Example />,
    document.getElementById('example')
)
