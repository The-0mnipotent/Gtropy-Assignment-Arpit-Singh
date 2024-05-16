// Box.jsx
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentStateCode,
  selectStateWiseData,
  setCurrentStateCode,
} from "../reducers/dataSlice";
import "./Box.css";

function Box() {
  const stateWiseData = useSelector(selectStateWiseData);
  const currentStateCode = useSelector(selectCurrentStateCode);
  const dispatch = useDispatch();

  // Find the state data based on currentStateCode
  const stateData = stateWiseData.find(
    (state) => state.statecode === currentStateCode
  );

  const handleMouseEnter = (stateCode) => {
    dispatch(setCurrentStateCode(stateCode));
  };

  return (
    <div className="box-container" onMouseEnter={() => handleMouseEnter("TT")}>
      <div className="boxes">
        <div className="box-card confirmed">
          <h3>CONFIRMED</h3>
          <p>{stateData ? stateData.confirmed : 0}</p>
        </div>
        <div className="box-card active">
          <h3>ACTIVE</h3>
          <p>{stateData ? stateData.active : 0}</p>
        </div>
        <div className="box-card recovered">
          <h3>RECOVERED</h3>
          <p>{stateData ? stateData.recovered : 0}</p>
        </div>
        <div className="box-card deceased">
          <h3>DECEASED</h3>
          <p>{stateData ? stateData.deaths : 0}</p>
        </div>
      </div>
      <div className="info">
        <div className="current-state">
          {stateData.state == "Total" ? "INDIA" : stateData.state}
        </div>
        <div className="update">
          <span className="top"> LAST UPDATED</span>
          <br />
          <span className="bottom">16/08/2021 23:59:59</span>
        </div>
      </div>
    </div>
  );
}

export default Box;
