// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dailyCases: [],
    stateWiseData: [
      {
        active: "363849",
        confirmed: "32249900",
        deaths: "432112",
        deltaconfirmed: "24692",
        deltadeaths: "438",
        deltarecovered: "36862",
        lastupdatedtime: "13/08/2021 23:27:22",
        migratedother: "12679",
        recovered: "31441260",
        state: "Total",
        statecode: "TT",
        statenotes: "",
      },
    ],
    currentStateCode: "TT",
  },
  reducers: {
    setDailyCases: (state, action) => {
      state.dailyCases = action.payload;
    },
    setStateWiseData: (state, action) => {
      state.stateWiseData = action.payload;
    },
    setCurrentStateCode(state, action) {
      state.currentStateCode = action.payload;
    },
  },
});

export const { setDailyCases, setStateWiseData, setCurrentStateCode } =
  dataSlice.actions;

export const selectDailyCases = (state) => state.data.dailyCases;
export const selectStateWiseData = (state) => state.data.stateWiseData;
export const selectCurrentStateCode = (state) => state.data.currentStateCode;

export default dataSlice.reducer;
