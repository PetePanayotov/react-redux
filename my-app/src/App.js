import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authStore } from "./store/auth";
import { counterStore } from "./store/counter";
import { multiplierStore } from "./store/multiplier";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { countryStore } from "./store/country";
import { weatherStore } from "./store/weather";

// function App() {
//   const [number, setNumber] = useState("");
//   const [initialMultiplier , setInitialMultiplier] = useState(1)

//   const { count, show , multiplier , isAuth} = useSelector((state) => ({
//     count: state.counter.count,
//     show: state.counter.show,
//     multiplier: state.multiplierCounter.multiplier,
//     isAuth: state.auth.isAuth
//   }));
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(authStore.actions.login())
//   }

//   const handleLogout = () => {
//     dispatch(authStore.actions.logout())
//   }
 
//   const handleChange = (event) => {
//     const value = event.target.value;

//     setNumber(value);
//   };

//   const handleIncrement = () => {
//     dispatch(counterStore.actions.increment());
//   };

//   const handleDecrement = () => {
//     dispatch(counterStore.actions.decrement()); //// counterStore.actions.increment() returns a object {type: "DECREMENT"}
//   };
//   const handleReset = () => {
//     dispatch(counterStore.actions.reset()); //// counterStore.actions.increment() returns a object {type: "RESET"}
//   };

//   const toggle = () => {
//     dispatch(counterStore.actions.toggle());
//   };

//   const handleIncraseBy = (value) => {
//     if (!isNaN(value)) {
//       return dispatch(counterStore.actions.increaseBy(Number(value)));
//     }
//   };

//   const handleDecreaseBy = (value) => {
//     if (!isNaN(value)) {
//       return dispatch(counterStore.actions.decreaseBy(Number(value)));
//     }
//   };

//   const handleMultiplierChange = (event) => {
//     const value = event.target.value;
//     setInitialMultiplier(value)
//   }

//   const handleMultiply = (value) => {

//     if (!isNaN(value)) {
//       return dispatch(multiplierStore.actions.multiply(Number(value)));
//     }
//   }

//   const handleDevide = (value) => {

//     if (!isNaN(value)) {
//       return dispatch(multiplierStore.actions.divide(Number(value)));
//     }
//   }

//   return (
//     <div className="App">
//       {
//         isAuth ? 
        
//         <>
//           <div>
//             {show && <div>{count}</div>}
//             <div>
//               <button onClick={handleIncrement}>INCREMENT</button>
//               <button onClick={handleDecrement}>DECREMENT</button>
//               <button onClick={handleReset}>RESET</button>
//               <button onClick={toggle}>TOGGLE</button>
//             </div>
//             <div>
//               <button onClick={() => handleIncraseBy(number)}>INCREMENT BY</button>
//               <button onClick={() => handleDecreaseBy(number)}>DECREMENT BY</button>
//               <input value={number} onChange={handleChange} />
//             </div>

//           </div>

//           <div>
//             <div>
//                 {multiplier}
//             </div>
//                 <button onClick={() => handleMultiply(initialMultiplier)}>MULTIPLY BY</button>
//                 <button onClick={() => handleDevide(initialMultiplier)}>DEVIDE BY</button>
//                 <input value={initialMultiplier} onChange={handleMultiplierChange} />

//           </div>
//           <button onClick={handleLogout}>
//             LOGOUT
//           </button>
//         </>

//         : <button onClick={handleLogin}>
//           LOGIN
//         </button>
//       }
//     </div>
//   );
// }

// function App() {

//   const {show} = useSelector(state => state.cart)
//   return (
//     <Layout>
//       {
//         show && <Cart />
//       }
//       <Products />
//     </Layout>
//   );
// }

function App() {

  const [country , setCountry] = useState("");
  const [city , setCity] = useState("")

  const dispatch = useDispatch();

  const {isLoading , loaded , data: {name , capital , population} , error} = useSelector(state => state.country);

  const {weatherIsLoading , weatherHasLoaded , weatherData , weatherError} = useSelector(state => ({

    weatherIsLoading: state.weather.isLoading,
    weatherHasLoaded: state.weather.loaded,
    weatherData: state.weather.data,
    weatherError: state.weather.error

  }))

  const handleChage = (event) => {
    const {value} = event.target;

    setCountry(value)
  };

  const handleCityName = (event) => {
    const value = event.target.value;

    setCity(value)
  }

  // const getCountry = async (countryName) => {

  //   try {
  //     dispatch(countryStore.actions.fetchCountry({isLoading: true , loaded: false , data: {} , error: false}))
      
  //     const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
  //     const data = await response.json();
  
  //     const {name , capital , population} = data[0];
  //     dispatch(countryStore.actions.fetchCountry({isLoading: false , loaded: true , data: {name , capital , population} , error: false}));

  //   } catch (error) {
      
  //     dispatch(countryStore.actions.fetchCountry({isLoading: false , loaded: true, data: {} , error: true }));
  //   }

  // };

  const getCountry = (countryName) => {
    dispatch(countryStore.actions.fetchCountry(countryName))
  };

  const getWeatherData = (cityName) => {
    dispatch(weatherStore.actions.fetchWeatherData(cityName))
  }

  return(
    <div>
      <div>
        <input value={country} onChange={handleChage}/>
        <button onClick={() => getCountry(country)}>
          GET
        </button>
        {
          error && <h2>Something went wrong m8!</h2>
        }
        {
          isLoading && <h2>Loading...</h2>
        }
        {

        loaded && !error && 
          <>
            <div>
              Country: {name}
            </div>
            <div>
              Capital: {capital}
            </div>
            <div>
              Population: {population}
            </div>
          </>
        }
      </div>

      <div>
        <input value={city} onChange={handleCityName}/>
        <button onClick={() => getWeatherData(city)}>
          GET
        </button>
      {
        weatherError && <h2>Something went wrong m8!</h2>
      }
      {
        weatherIsLoading && <h2>Loading...</h2>
      }
      {

        weatherHasLoaded && !weatherError && 
          <>
            <div>
              Current temperature in {weatherData.cityName} is {weatherData.temperature} C. 
            </div>
          </>
      }
    </div>

    </div>
  )
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
