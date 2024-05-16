// Chart.jsx
import { useSelector } from "react-redux";
import {
  selectCurrentStateCode,
  selectDailyCases,
  selectStateWiseData,
} from "../reducers/dataSlice";
import "./Charts.css";
import DoughnutChart from "./DoughnutChart";

import LineCharts from "./LineCharts";

function Charts() {
  const currentStateCode = useSelector(selectCurrentStateCode);
  const stateWiseData = useSelector(selectStateWiseData);
  const dailyCases = useSelector(selectDailyCases);

  // console.log("Charts", stateWiseData);

  return (
    <div className="chart-container">
      <div className="chart-half">
        <DoughnutChart
          currentStateCode={currentStateCode}
          stateWiseData={stateWiseData}
        />
      </div>
      <div className="chart-half">
        <LineCharts
          currentStateCode={currentStateCode}
          dailyCases={dailyCases}
        />
      </div>
    </div>
  );
}

export default Charts;
