import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qst: "",
      ans: "",
    }
  }

  handleClick  = (event)=>{
   console.log("working")
  }


  render() {
    return (
      <>
      <div className='fromdiv'>

        <form className='formOne'> 

          <label htmlFor='qst'>Qst 1 What is React</label>
          <input type="checkbox" id='optOne' onChange={this.handleClick} value='Option 1'></input>
          <label htmlFor='optOne'>Option 1</label>

          <input type="checkbox" id='optTwo' onChange={this.handleClick} value='Option 2'></input>
          <label htmlFor='optTwo'>Option 2</label>

          <input type="checkbox" id='optThree' onChange={this.handleClick} value='Option 3'></input>
          <label htmlFor='optThree'>Option 3</label>

          <button type='submit' text='submit'>Submit</button>

        </form>
    
        <form className='formTwo'>
        <label htmlFor='quest'>Qst 2 Why is React</label>
          <input type="radio" id='optA' onChange={this.handleClick} value='Option 1' name='options'></input>
          <label htmlFor='optA'>Option A</label>

          <input type="radio" id='optB' onChange={this.handleClick} value='Option 2' name='options'></input>
          <label htmlFor='optB'>Option B</label>

          <input type="radio" id='optC' onChange={this.handleClick} value='Option 3' name='options'></input>
          <label htmlFor='optC'>Option C</label>

          <button type='submit' text='submit'>Submit</button>
        </form>
        </div>


      </>
    )
  }
}

export default App;
