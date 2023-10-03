import logo from './logo.png';
import './App.css';
import Phonebook from "../src/Components/phonebook"

function App() 
{
  return (
    <div className="App">
      <h1 className='sajili'> Saji<span id='li-blue'>li</span></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Phonebook />
        </div>
  )
}
export default App;
