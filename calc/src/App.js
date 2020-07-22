import React, { Component } from 'react';

class App extends Component {
  state={
    text:"",
    firstno:'',
    secno:'',
    operation:''
  }

  btnClickNo = (clkdno) => {
    let text=this.state.text+clkdno
    this.setState({
      text:text
    }) 
  }

  btnClickOp = (clkdop) => {
    let firstno=this.state.text;
    let operation=clkdop
    this.setState({
      operation,
      firstno,
      text:""
    }) 
  }

  btnClickEq=()=>{
    var pgbtn=document.getElementById("eq");
    pgbtn.click();
    let secno=this.state.text;
    this.setState({
      secno:secno,
      text:''
    })
    //MULTIPLY
    if(this.state.operation==="*"){
      let a=(parseInt(this.state.firstno));
      let b=(parseInt(secno));
      this.setState({
        text:a*b
      })
    }

    //DIVIDE
    if(this.state.operation==="/"){
      let a=(parseFloat(this.state.firstno));
      let b=(parseFloat(secno));
      this.setState({
        text:a/b
      })
    }

    //ADDITION
    if(this.state.operation==="+"){
      let a=(parseInt(this.state.firstno));
      let b=(parseInt(secno));
      this.setState({
        text:a+b
      })
    }

    //SUBTRACT
    if(this.state.operation==="-"){
      let a=(parseInt(this.state.firstno));
      let b=(parseInt(secno));
      this.setState({
        text:a-b
      })
    }

  }

  btnClickCl=()=>{
    this.setState({
      text:"",
      firstno:'',
      secno:'',
      operation:''
    })
  }

  render(){
    return (
      <div className="App">
      <h1 className='center cyan-text'>Calculator</h1>
      <div className="container center">
        <div className="center ioscr">
          <input readOnly value={this.state.text} type="text"/>
        </div>
        <div className="center btns">
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("1")}>1</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("2")}>2</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("3")}>3</button>
          <button className="sp btn waves-effect waves-red" onClick={()=>this.btnClickOp("*")}>*</button>

          <br/>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("4")}>4</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("5")}>5</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("6")}>6</button>
          <button className="sp btn waves-effect waves-red" onClick={()=>this.btnClickOp("/")}>/</button>

          <br/>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("7")}>7</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("8")}>8</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("9")}>9</button>
          <button className="sp btn waves-effect waves-red" onClick={()=>this.btnClickOp("+")}>+</button>

          <br/>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo("0")}>0</button>
          <button className="btn waves-effect waves-red" onClick={()=>this.btnClickNo(".")}>.</button>
          <button id="eq" className="btn waves-effect waves-red" onClick={()=>this.btnClickEq("=")}>=</button>
          <button className="sp btn waves-effect waves-red" onClick={()=>this.btnClickOp("-")}>-</button>

          <br/>
          <button className="spsp btn btn waves-effect waves-red" onClick={()=>this.btnClickCl("")}>Clr</button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;