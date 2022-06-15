import React, { Component } from 'react'

class AppClass extends Component {
  constructor(props){
      super(props)
      this.state = {date: new Date()};
      this.state={
          Name:"Miryam",
          LastName:"Jmour",
          show: false,
          digit: 0,
          date: new Date().toLocaleString(),
          time: new Date().toLocaleTimeString()
      }
  }
  show=()=> {
   this.setState({show:!this.state.show})
  }
  digit=()=>{
   this.setState({digit:!this.state.digit})   
  }

  componentDidMount =()=>{
      setInterval(() =>{
      this.setState(prevState => ({
          digit: prevState.digit +1,
          date: new Date().toLocaleString()
      }));
    }, 1000);
  }
  render(){
      const {digit, date, time} = this.state;
      return (
    
      <div>
            <h1>Workshop State</h1>
            {this.state.show && <p> My name is {this.state.Name} and my lastname is {this.state.LastName} </p> }
            <button onClick={this.show}> Show Me </button>
            <br/>
            <h1>Time interval</h1>
            counter: {digit}
            <br/>
             Start Time: {time}
            <br/>
            Final Time: {date}
            
     </div>
  )
}
}
export default AppClass

