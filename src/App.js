import logo from './logo.svg';
import './App.css';
import Breaking from "./Breaking"
import axios from "./axios"
function App() {
  
    const getAllCharecters=()=>{
      axios.get("http://www.breaingbadapi.com/api/charecters")
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))
    }
    return (
      <div className="App">
      <Breaking />
      </div>
 
   
  );
}

export default App;
