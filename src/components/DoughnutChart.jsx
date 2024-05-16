import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughnutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ currentStateCode, stateWiseData }) {
  const stateData = stateWiseData.find(
    (state) => state.statecode === currentStateCode
  );

  const data = {
    labels: [
      `active ${stateData.active}`,
      `deceased ${stateData.deaths}`,
      `recovered ${stateData.recovered}`,
    ],
    datasets: [
      {
        label: "Number of Cases",
        data: [stateData.active, stateData.deaths, stateData.recovered],
        backgroundColor: ["blue", "grey", "green"],
        border: ["blue", "grey", "green"],
        borderRadius: 3,
        center: [stateData.confirmed],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
    cutout: 65,
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 20px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        data.datasets[0].center[0],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <>
      <div className="doughnut">
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        ></Doughnut>
      </div>
    </>
  );
}

// Add prop validation
DoughnutChart.propTypes = {
  currentStateCode: PropTypes.string.isRequired,
  stateWiseData: PropTypes.array.isRequired,
};

export default DoughnutChart;
