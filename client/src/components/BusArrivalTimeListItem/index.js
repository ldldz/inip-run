import './style.css';

const BusArrivalTimeListItem = ({busNo, arrivalEstimateTime}) => {
  return (
    <div className="busArrivalTimeListItem">
      <div className="busNo">{busNo}</div>
      <div className="arrivalEstimateTime">{parseInt(arrivalEstimateTime / 60)}분 {arrivalEstimateTime % 60}초</div>
    </div>
  );
};

export default BusArrivalTimeListItem;