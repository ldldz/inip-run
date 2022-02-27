import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const callApi = async () => {
    axios.get("https://iniprun.herokuapp.com/api", { params: { bstopid: "164000395" } }).then((res) => {
      console.log(res.data);
      setData(res.data.map((v) => [v.ROUTEID._text, v.ARRIVALESTIMATETIME._text]));
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      {data.map(([routeId, arrivalEstimateTime]) => (
        <div>{`버스 번호: ${routeId} 남은 시간: ${parseInt(arrivalEstimateTime / 60)}분 ${arrivalEstimateTime % 60}초`}</div>
      ))}
    </div>
  );
}

export default App;
