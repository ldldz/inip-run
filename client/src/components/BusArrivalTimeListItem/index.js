import { useEffect, useState } from 'react';
import './style.css';

const BusArrivalTimeListItem = ({busNo, arrivalEstimateTime}) => {
  const [arrivalTime, setArrivalTime] = useState(arrivalEstimateTime);
  useEffect(() => {
    const timer = setInterval(() => {
        setArrivalTime(arrivalTime => arrivalTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="busArrivalTimeListItem">
      <div className="busNo">{busNo}</div>
      <div className="arrivalEstimateTime">{parseInt(arrivalTime / 60)}분 {arrivalTime % 60}초</div>
    </div>
  );
};

export default BusArrivalTimeListItem;