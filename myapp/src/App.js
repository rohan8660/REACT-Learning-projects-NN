import React, { Component } from 'react';
import MyFrnds from "./myfrnds";
import AddFrnd from "./AddFrnd";

class App extends Component {
  state = {
    frnds :[
      {name : 'Rohan', number :"8762248660",id:1},
      {name : "Rohn", number :"2038742987",id:2},
      {name : "Rhan", number :"5464364640",id:3}
    ]
  }
  addfrnd =(afrnd)=>{
    afrnd.id= Math.random();
    console.log("added",afrnd);
    let frnds=[...this.state.frnds,afrnd]
    this.setState({
      frnds: frnds
    }) 
  }
  deletefrnd = (id) => {
    console.log("deleted id :",id);
    let frnds = this.state.frnds.filter(frnd =>{
      return frnd.id !==id
    })
    this.setState({
      frnds: frnds
    })
  }
  render() {
    return (
      <div className="App">
        <h1>this is my first react app</h1>
        <p>welcome :)</p>
        <hr/>
        <MyFrnds frnds={this.state.frnds}  deletefrnd={this.deletefrnd}/>
        <hr/>
        <AddFrnd addfrnd={this.addfrnd}/>
      </div>
    )
  }
}
export default App;
