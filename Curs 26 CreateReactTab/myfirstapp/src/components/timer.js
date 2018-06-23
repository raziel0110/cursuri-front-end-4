import React,{Component} from 'react';
///////////////////class components////////////////////
class Timer extends Component{
    constructor(props){
        super(props);
// only set this.state in this way here
// use setState  for all cases
        this.state = {
            date : new Date()
        };
    }
    tick(){
        setInterval(function(){
            this.setState({date: new Date()});
        },1000);
    }
render(){
        return (
            <p>{this.props.label} {this.state.date}</p>
        );
    } 
}

///////////////////////////function components///////////////////////////////
// function Timer(props){
//     //props.label = "orice"
//     //can not assign and props
    
//     return (
//         <p>{props.label} {Date()}</p>
//     );
// }

export default Timer;