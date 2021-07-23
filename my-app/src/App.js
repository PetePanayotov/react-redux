import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/counter";

function App() {
  const [number, setNumber] = useState("");

  const { count, show } = useSelector((state) => ({
    count: state.counter.count,
    show: state.counter.show,
  }));
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;

    setNumber(value);
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement()); //// counterStore.actions.increment() returns a object {type: "DECREMENT"}
  };
  const handleReset = () => {
    dispatch(counterActions.reset()); //// counterStore.actions.increment() returns a object {type: "RESET"}
  };

  const toggle = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncraseBy = (value) => {
    if (!isNaN(value)) {
      return dispatch(counterActions.increaseBy(Number(value)));
    }
  };

  const handleDecreaseBy = (value) => {
    if (!isNaN(value)) {
      return dispatch(counterActions.decreaseBy(Number(value)));
    }
  };

  return (
    <div className="App">
      {show && <div>{count}</div>}
      <div>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={toggle}>TOGGLE</button>
      </div>
      <div>
        <button onClick={() => handleIncraseBy(number)}>INCREMENT BY</button>
        <button onClick={() => handleDecreaseBy(number)}>DECREMENT BY</button>
        <input value={number} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//   }

//   handleChange(event) {
//     const value = event.target.value;
//     this.setState({ value });
//   }

//   handleIncerement() {
//     this.props.increment();
//   }

//   handleDecrement() {
//     this.props.decrement();
//   }

//   handleReset() {
//     this.props.reset();
//   }

//   handleToggle() {
//     this.props.toggle();
//   }

//   handleIncreaseBy(val) {
//     if (!isNaN(val)) {
//       return this.props.increaseBy(Number(val));
//     }
//   }

//   handleDecreaseBy(val) {
//     if (!isNaN(val)) {
//       return this.props.decreaseBy(Number(val));
//     }
//   }

//   render() {
//     const { count, show } = this.props;
//     return (
//       <div className="App">
//         {show && <div>{count}</div>}
//         <div>
//           <button onClick={this.handleIncerement.bind(this)}>INCREMENT</button>
//           <button onClick={this.handleDecrement.bind(this)}>DECREMENT</button>
//           <button onClick={this.handleReset.bind(this)}>RESET</button>
//           <button onClick={this.handleToggle.bind(this)}>TOGGLE</button>
//         </div>
//         <div>
//           <button onClick={this.handleIncreaseBy.bind(this, this.state.value)}>
//             INCREMENT BY
//           </button>
//           <button onClick={this.handleDecreaseBy.bind(this, this.state.value)}>
//             DECREMENT BY
//           </button>
//           <input
//             value={this.state.value}
//             onChange={this.handleChange.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   count: state.count,
//   show: state.show,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(counterStore.actions.increment()),
//   decrement: () => dispatch(counterStore.actions.decrement()),
//   reset: () => dispatch(counterStore.actions.reset()),
//   toggle: () => dispatch(counterStore.actions.toggle()),
//   increaseBy: (num) => dispatch(counterStore.actions.increaseBy(num)),
//   decreaseBy: (num) => dispatch(counterStore.actions.decreaseBy(num)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
