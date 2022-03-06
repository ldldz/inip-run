import { useEffect, useState } from "react";
import { routeIdToBusNo } from "../data";
import axios from "axios";

const BusArrivalTimeList = () => {
  const [busArrivalData, setBusArrivalData] = useState([]);
  const callApi = async () => {
    axios.get("https://iniprun.herokuapp.com/api", { params: { bstopid: "164000395" } }).then((res) => {
      console.log(res.data);
      setBusArrivalData(res.data.filter((v) => routeIdToBusNo[v.ROUTEID._text]).map((v) => [v.ROUTEID._text, v.ARRIVALESTIMATETIME._text]));
    });
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="busArrivalTimeList">
      {busArrivalData.map(([routeId, arrivalEstimateTime]) => (
      <div>{`${routeIdToBusNo[routeId]} 남은 시간: ${parseInt(arrivalEstimateTime / 60)}분 ${arrivalEstimateTime % 60}초`}</div>
    ))}
    </div>
  );
};

export default BusArrivalTimeList;