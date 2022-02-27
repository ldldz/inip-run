import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const callApi = async () => {
    axios.get("/api", { params: { bstopid: "164000395" } }).then((res) => {
      console.log(res.data);
      setData(res.data.map((v) => [v.ROUTEID._text, v.ARRIVALESTIMATETIME._text]));
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return <div className="App">{data.join("\n")}</div>;
}

export default App;
