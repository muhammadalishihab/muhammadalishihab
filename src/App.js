import './App.css';
import Home from './pages/Home';
import ReactGa from 'react-ga'
import { useEffect } from 'react';

const TRACKING_ID = "G-951D3WCD81"
ReactGa.initialize(TRACKING_ID)
function App() {


 
  return (
    <div className="App relative">
      <div className='bgcontainer fixed top-0 left-0 bottom-0 right-0'></div>
      <Home />
    </div>
  );
}

export default App;
