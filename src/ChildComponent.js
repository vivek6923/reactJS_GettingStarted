import React , {Component} from 'react'


class ChildComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            defaultValue:""
        }
        this.onHandleInput = this.onHandleInput.bind(this)
    }
    func1(){
        this.props.dataFromChild(this.state.defaultValue)
    }
    onHandleInput(ev){
        // console.log(ev.target.value)
        this.setState({
            defaultValue:ev.target.value
        })
    }
    render(){
        //console.log("qwerty")
        return(
            <div>
                <input type ="text" placeholder="Enter Value" name = "hello" onChange={this.onHandleInput}/>
                <button onClick={() => this.func1()}>Button</button>
            </div>
        )
    }
}

export default ChildComponent