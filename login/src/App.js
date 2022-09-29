// import { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       pass: "",
//     }
//   }

//   handleEmail = (event) =>{
//     this.setState(
//       {
//         email: event.target.value,
//       }
//     )
//   }


//   handlePwd = (event) =>{
//     this.setState(
//       {
//         pass: event.target.value,
//       }
//     )
//   }

//   render() {
//     return (
//       <>
//         <form>

//         <label htmlFor='userName'>user</label>
//         <input type="text" id='userName' onChange={this.handleEmail} value={this.state.email}></input>
//         <label htmlFor='pwd'>password</label>
//         <input type="password" id='pwd' onChange={this.handlePwd} value={this.state.pass}></input>

//         </form>


//       </>
//     )
//   }
// }

// export default App;



// ##################################### BASIC code here ##########################################


// import { Component} from "react"

// export class App extends Component{
//   constructor(props){
//     super()
//       this.state = {
//         ename : "Shweta"

//     }
//   }


//   render(){
//     return (
//       <>
//       <input className="title" value={this.state.ename}   ></input>
//       </>
//     )


//   }

// }

// export default App;





//######################### change color here ######################################################



// import {Component} from "react"

// export class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       color: "red"
//     }
//   }

//   colorChange= () =>{
//     this.setState({
//       color: "blue"
//     })

//   }

//   render(){
//     return (
//       <>
//       <p > this is Color : {this.state.color}
//         </p>    
//         <button type="button" onClick={this.colorChange}>Change color</button>
//           </>
//     )
//   }
// }

// export default App
///////////********8practicce************8 */

// import { useState } from "react"
// import Greet  from "./components/Greet"

// function App() {
//   const [color, setColor] = useState("red")

//   function handleColor() {
//     setColor("grey")
//   }



//   return (
//     <div>
//       <p >color: {color}</p>
//       <button type="button" onClick={handleColor}>Change </button>
//       <button type="button" onClick={() => {
//         setColor("blue")
//       }}>Change 
//       </button>
//       <Greet name="Bruce">
//         <p>HI shweta</p>
//       </Greet>
//     </div>
//   )

// }

// export default App


///*****************state**************************** */

// import React, {Component} from "react";
// import Message from "./components/Message";

// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//         <Message ></Message>
//       </div>
//     )
//   }
// }

// export default App



////////***********setState******************* */


// import React,{ Component } from "react";
// import Counter from "./components/Counter";

// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//         <Counter></Counter>
//       </div>
//     )
//   }
// }
// export default App

//event//

import React,{ Component } from "react";
import FunctionClick from "./components/FunctionClick";

class App extends Component{
  render(){
    return (
      <div className="App">
        <FunctionClick>
          
        </FunctionClick>
      </div>
    )
  }
}
export default App