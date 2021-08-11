import React, { Component,useState } from "react";
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return(
      <React.Fragment>
        <div>value: { props.value } </div>)
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.ount.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)





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


