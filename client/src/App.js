import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const callApi = async () => {
    axios.get('https://iniprun.herokuapp.com/api').then((res) => console.log(res));
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
