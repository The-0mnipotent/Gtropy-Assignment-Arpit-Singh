import React from "react";
import DatamapsIndia from "react-datamaps-india";
import { useDispatch } from "react-redux";
import { setCurrentStateCode } from "../reducers/dataSlice";
import "./Map.css";

const Map = () => {
  const dispatch = useDispatch();

  return (
    <div className="map">
      <DatamapsIndia
        regionData={{
          "Andaman & Nicobar Island": {
            value: 7549,
            code: "AN",
          },
          "Andhra Pradesh": {
            value: 1994606,
            code: "AP",
          },
          "Arunachal Pradesh": {
            value: 51513,
            code: "AR",
          },
          Assam: {
            value: 580657,
            code: "AS",
          },
          Bihar: {
            value: 725497,
            code: "BR",
          },
          Chandigarh: {
            value: 62031,
            code: "CH",
          },
          Chhattisgarh: {
            value: 1003814,
            code: "CT",
          },
          Delhi: {
            value: 1437118,
            code: "DL",
          },
          Goa: {
            value: 172568,
            code: "GA",
          },
          Gujarat: {
            value: 825196,
            code: "GJ",
          },
          Haryana: {
            value: 770230,
            code: "HR",
          },
          "Himachal Pradesh": {
            value: 210419,
            code: "HP",
          },
          "Jammu & Kashmir": {
            value: 323499,
            code: "JK",
          },
          Jharkhand: {
            value: 347620,
            code: "JH",
          },
          Karnataka: {
            value: 2930529,
            code: "KA",
          },
          Kerala: {
            value: 3702417,
            code: "KL",
          },
          Lakshadweep: {
            value: 20447,
            code: "LD",
          },
          "Madhya Pradesh": {
            value: 792043,
            code: "MP",
          },
          Maharashtra: {
            value: 6396805,
            code: "MH",
          },
          Manipur: {
            value: 108545,
            code: "MN",
          },
          Meghalaya: {
            value: 72160,
            code: "ML",
          },
          Mizoram: {
            value: 48711,
            code: "MZ",
          },
          Nagaland: {
            value: 29195,
            code: "NL",
          },
          Odisha: {
            value: 995433,
            code: "OR",
          },
          Puducherry: {
            value: 122331,
            code: "PY",
          },
          Punjab: {
            value: 599972,
            code: "PB",
          },
          Rajasthan: {
            value: 953954,
            code: "RJ",
          },
          Sikkim: {
            value: 28726,
            code: "SK",
          },
          "Tamil Nadu": {
            value: 2590632,
            code: "TN",
          },
          Telangana: {
            value: 652785,
            code: "TG",
          },
          Tripura: {
            value: 81308,
            code: "TR",
          },
          "Uttar Pradesh": {
            value: 1708965,
            code: "UP",
          },
          Uttarakhand: {
            value: 342606,
            code: "UT",
          },
          "West Bengal": {
            value: 1539065,
            code: "WB",
          },
        }}
        hoverComponent={({ value }) => {
          dispatch(setCurrentStateCode(value.code));
          return (
            <div>
              <div>
                {value.name} <br />
                {value.value}
              </div>
            </div>
          );
        }}
        mapLayout={{
          title: "",
          legendTitle: "Range of Covid Cases",
          startColor: "#ECEDDA",
          endColor: "#8A8A04",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#3F3C3C",
          hoverColor: "#676363",
          hoverBorderColor: "green",
          height: 10,
          weight: 20,
        }}
      />
    </div>
  );
};

export default Map;
