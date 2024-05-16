// LineChart.jsx
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./LineCharts.css";

function LineCharts({ currentStateCode, dailyCases }) {
  // Initialize arrays to store filtered data
  let confirmedCases = [];
  let recoveredCases = [];
  let deceasedCases = [];
  currentStateCode = currentStateCode.toLowerCase();

  // Iterate over each entry in dailyCases
  dailyCases.forEach((entry) => {
    // Check if the state code matches the currentStateCode
    if (entry[currentStateCode] !== "0") {
      // If the state code matches, check the status
      if (entry.status === "Confirmed") {
        // If confirmed, calculate active cases and push to activeCases array
        confirmedCases.push(parseInt(entry[currentStateCode]));
      } else if (entry.status === "Recovered") {
        // If recovered, push the entry to recoveredCases array
        recoveredCases.push(parseInt(entry[currentStateCode]));
      } else if (entry.status === "Deceased") {
        // If deceased, push the entry to deceasedCases array
        deceasedCases.push(parseInt(entry[currentStateCode]));
      }
    }
  });

  const data = [
    {
      name: "10th",
      confirmedCases: confirmedCases[0],
      recoveredCases: recoveredCases[0],
      deceasedCases: deceasedCases[0],
    },
    {
      name: "11th",
      confirmedCases: confirmedCases[1],
      recoveredCases: recoveredCases[1],
      deceasedCases: deceasedCases[1],
    },
    {
      name: "12th",
      confirmedCases: confirmedCases[2],
      recoveredCases: recoveredCases[2],
      deceasedCases: deceasedCases[2],
    },
    {
      name: "13th",
      confirmedCases: confirmedCases[3],
      recoveredCases: recoveredCases[3],
      deceasedCases: deceasedCases[3],
    },
    {
      name: "14th",
      confirmedCases: confirmedCases[4],
      recoveredCases: recoveredCases[4],
      deceasedCases: deceasedCases[4],
    },
    {
      name: "15th",
      confirmedCases: confirmedCases[5],
      recoveredCases: recoveredCases[5],
      deceasedCases: deceasedCases[5],
    },
    {
      name: "16th",
      confirmedCases: confirmedCases[6],
      recoveredCases: recoveredCases[6],
      deceasedCases: deceasedCases[6],
    },
  ];

  return (
    <>
      <p className="mini-changes">August-2021</p>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data}>
          {/* margin={{ right: 300 }} */}
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="confirmedCases" stroke="red" activeDot={{ r: 8 }} />
          <Line dataKey="recoveredCases" stroke="green" activeDot={{ r: 8 }} />
          <Line dataKey="deceasedCases" stroke="grey" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineCharts;
