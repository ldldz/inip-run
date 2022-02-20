import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const callApi = async () => {
    axios.get('http://localhost:3000/api').then((res) => console.log(res));
  };
  useEffect(() => {
    callApi();
  }, []);
  
  return (
    <div className="App">
      인입런🏃
    </div>
  );
}

export default App;
