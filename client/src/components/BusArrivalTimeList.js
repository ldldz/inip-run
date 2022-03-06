import { useEffect, useState } from "react";
import { routeIdToBusNo } from "../data";
import axios from "axios";
import BusArrivalTimeListItem from "./BusArrivalTimeListItem";

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
        <BusArrivalTimeListItem busNo={routeIdToBusNo[routeId]} arrivalEstimateTime={arrivalEstimateTime}/>
      ))}
    </div>
  );
};

export default BusArrivalTimeList;