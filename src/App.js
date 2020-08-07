import React from 'react';
import './App.css';
import Vivek from "./component/Weather"
import Sunkara from "./component/Details"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      t:false,
      data:[]
    }
  }
  render(){
    return(<Router> 
            <div>
              <Route exact path="/weather/:id" component={Sunkara}></Route>
              <Route exact path="/" component={Vivek}></Route>
            </div>
          </Router>)
    }

}

export default App;