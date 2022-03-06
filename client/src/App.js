import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { routeIdToBusNo } from "./data";

function App() {
  const [data, setData] = useState([]);
  const callApi = async () => {
    axios.get("https://iniprun.herokuapp.com/api", { params: { bstopid: "164000395" } }).then((res) => {
      console.log(res.data);
      setData(res.data.filter((v) => routeIdToBusNo[v.ROUTEID._text]).map((v) => [v.ROUTEID._text, v.ARRIVALESTIMATETIME._text]));
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      {data.map(([routeId, arrivalEstimateTime]) => (
        <div>{`${routeIdToBusNo[routeId]} 남은 시간: ${parseInt(arrivalEstimateTime / 60)}분 ${arrivalEstimateTime % 60}초`}</div>
      ))}
    </div>
  );
}

export default App;
