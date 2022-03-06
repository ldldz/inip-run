import { useEffect, useState } from "react";

const BusArrivalTimeListItem = ({busNo, arrivalEstimateTime}) => {
  console.log(busNo, arrivalEstimateTime)
  return (
    <div className="busArrivalTimeListItem">
      <div className="busNo">{busNo}</div>
      <div className="arrivalEstimateTime">{parseInt(arrivalEstimateTime / 60)}분 {arrivalEstimateTime % 60}초</div>
    </div>
  );
};

export default BusArrivalTimeListItem;