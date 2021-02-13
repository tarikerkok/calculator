import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    num:0,
    calculator:"",
    calc:"",
    total:0
  };

  calculate = (data,type) => {
    if(type == "num"){
      let calculator = this.state.calculator
      this.setState({calc:calculator+data,calculator:calculator+data})
    }
    else if(type == "process"){
      this.setState({calc:""})
      if(data == "/"){
        
        this.setState({
          total:this.state.total / parseFloat(this.state.calc),
          calc:"",
          calculator:this.state.calculator+" / "
        })
      }
      else if(data == "+"){
        this.setState({
          total:this.state.total + parseFloat(this.state.calc),
          calc:"",
          calculator:this.state.calculator+" + "
        })
      }
      else if(data == "x"){
        this.setState({
          total:this.state.total * parseFloat(this.state.calc),
          calc:"",
          calculator:this.state.calculator+" * "
        })
      }
      else if(data == "-"){
        this.setState({
          total:this.state.total - parseFloat(this.state.calc),
          calc:"",
          calculator:this.state.calculator+" - "
        })
      }
    }
  }

  render() {
    return (
      <div className="container-fluid main">
        <div class="row text-center">
          <div class="col-3">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">Calculator</h4>
              </div>
              <div class="card-body">
                <div className="calculator-top text-right">
                  <div style={{ fontSize: 20, fontWeight: "bold" }}>{ this.state.total }</div>
                  <div style={{ fontSize: 20, fontWeight: "bold" }}>{ this.state.calculator }</div>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    2<sup>nd</sup>
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    π
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    e
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    C
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    X
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    x<sup>2</sup>
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    1/x
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    |x|
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    exp
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    mod
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    √x
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    (
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    )
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    n!
                  </button>
                  <button onClick={() => this.calculate("/","process")} type="button" class="btn btn-secondary myButton">
                    /
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    x<sup>y</sup>
                  </button>
                  <button onClick={() => this.calculate(7,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    7
                  </button>
                  <button onClick={() => this.calculate(8,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    8
                  </button>
                  <button onClick={() => this.calculate(9,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    9
                  </button>
                  <button onClick={() => this.calculate("x","process")} type="button" class="btn btn-secondary myButton">
                    X
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    10<sup>x</sup>
                  </button>
                  <button onClick={() => this.calculate(4,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    4
                  </button>
                  <button onClick={() => this.calculate(5,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    5
                  </button>
                  <button onClick={() => this.calculate(6,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    6
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    -
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    log
                  </button>
                  <button onClick={() => this.calculate(1,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    1
                  </button>
                  <button onClick={() => this.calculate(2,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    2
                  </button>
                  <button onClick={() => this.calculate(3,"num")} type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    3
                  </button>
                  <button onClick={() => this.calculate("+","process")} type="button" class="btn btn-secondary myButton">
                    +
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-secondary myButton">
                    ln
                  </button>
                  <button type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    +/-
                  </button>
                  <button type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    0
                  </button>
                  <button type="button" style={{backgroundColor:'rgb(150,150,150)'}} class="btn btn-secondary myButton">
                    ,
                  </button>
                  <button type="button" class="btn btn-secondary myButton">
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
