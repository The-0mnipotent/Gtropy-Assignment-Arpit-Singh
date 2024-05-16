// SecondSection.jsx
import React from "react";
import { useSelector } from "react-redux";
import Box from "../components/Box";
import HeadingSecond from "../components/HeadingSecond";
import Map from "../components/Map";
import { selectStateWiseData } from "../reducers/dataSlice";
import "./SecondSection.css";

function SecondSection() {
  const stateWiseData = useSelector(selectStateWiseData);

  return (
    <div className="section">
      <div className="heading">
        <HeadingSecond />
      </div>
      <div className="main-container">
        <div className="box-container">
          <Box stateWiseData={stateWiseData} />
        </div>
        <div className="map-container">
          <Map stateWiseData={stateWiseData} />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
