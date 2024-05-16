// FirstSection.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "../components/Charts";
import HeadingFirst from "../components/HeadingFirst";
import Table from "../components/Table";
import {
  selectDailyCases,
  selectStateWiseData,
  setCurrentStateCode,
} from "../reducers/dataSlice";
import "./FirstSection.css";

function FirstSection() {
  const stateWiseData = useSelector(selectStateWiseData);
  const dailyCasesData = useSelector(selectDailyCases);
  const dispatch = useDispatch();

  const handleMouseEnter = (stateCode) => {
    dispatch(setCurrentStateCode(stateCode));
  };

  return (
    <div className="section" onMouseEnter={() => handleMouseEnter("TT")}>
      <div className="heading">
        <HeadingFirst />
      </div>
      <div className="charts">
        <Charts stateWiseData={stateWiseData} dailyCasesData={dailyCasesData} />
      </div>
      <div className="table">
        <Table stateWiseData={stateWiseData} />
      </div>
    </div>
  );
}

export default FirstSection;
