import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      stateOfApp: ""
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }

  shouldComponentUpdate(nextProps , nextState){
    console.log("shouldComponentUpdate")
    return true
  }

  dataFromChild = (data) =>{
    this.setState({
      stateOfApp : "qwerty"
    })
  }
  render() {
    console.log("render")
    return (
      <div className="App">
        {/* <ChildComponent data={"Hello world"}
        dataFromChild={this.dataFromChild} ></ChildComponent> */}
        <button onClick={this.dataFromChild}>Click Me</button>
      </div>
    );
  }
}

export default App;
