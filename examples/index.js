import React from 'react';
import ReactDOM from 'react-dom';
import { InputComponent, CheckboxComponent, RadioComponent,
    SwitchComponent, TextboxComponent, SelectComponent, BtnComponent } from '../src/';
import loadAsset from './load-assets';

// change the windows to linux or osx for different themes
loadAsset('windows');

class Example extends React.Component{
    render(){
        return (
            <div style={{"width": "50%"}}>
                <CheckboxComponent value="Mi name na Tom" onClick={(e) => alert(e.target.value)} indeterminate={true}>Indeterminate CheckboxComponent</CheckboxComponent>
                <br />
                <InputComponent className="master primary" state="warning" placeholder="Enter your name" width="200px;" type="password">Label</InputComponent>
                <br />
                <RadioComponent size="small" onChange={(e) => alert(e.target.value)} value="Test radio" >Small Radio Box</RadioComponent>
                <br />
                <SwitchComponent className="primary" defaultChecked={true} />
                <br />
                <TextboxComponent defaultValue="Value of textbox here"></TextboxComponent>
                <br />
                <SelectComponent>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </SelectComponent>
                <BtnComponent theme="warning" type="button"> Button Here</BtnComponent>
            </div>);
    }
}

ReactDOM.render(
    <Example ></Example>,
    document.getElementById('example')
)
