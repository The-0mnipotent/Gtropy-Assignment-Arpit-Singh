// Table.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentStateCode } from "../reducers/dataSlice";
import "./Table.css";

function Table({ stateWiseData }) {
  const dispatch = useDispatch();
  const handleMouseEnter = (value) => {
    dispatch(setCurrentStateCode(value));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>State/UT</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deceased</th>
          </tr>
        </thead>
        <tbody>
          {stateWiseData.map((data) =>
            data.confirmed != 0 ? (
              <tr
                key={data.state}
                onMouseOver={() => handleMouseEnter(data.statecode)}
              >
                <td>{data.state == "Total" ? "INDIA" : data.state}</td>
                <td className="confirmed">{data.confirmed}</td>
                <td className="active">{data.active}</td>
                <td className="recovered">{data.recovered}</td>
                <td className="deceased">{data.deaths}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
