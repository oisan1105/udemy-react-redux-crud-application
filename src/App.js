import React, { Component,useState }from "react";


const App = () =>(<Counter></Counter>)


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  handleMinusButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount - 1 })
  }

  render() {
    return(
      <React.Fragment>
        <div>count: { this.state.count } </div>)
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


// const CounterNew = () => {
//   const [state, setstate] = useState(0)
//   const handlePlusButton = () => setstate(state+1)
//   const handleMinusButton = () => setstate(state-1)
//   return(
//     <>
//       <div>count: {state} </div>)
//       <button onClick={handlePlusButton}>+1</button>
//       <button onClick={handleMinusButton}>-1</button>
//     </>
//   )
// }

export default App;
