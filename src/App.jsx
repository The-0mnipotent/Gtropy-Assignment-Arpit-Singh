import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setDailyCases, setStateWiseData } from "./reducers/dataSlice";
import FirstSection from "./sections/FirstSection";
import Navigation from "./sections/Navigation";
import SecondSection from "./sections/SecondSection";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStateWiseData = async () => {
      try {
        const response = await axios.get(
          "https://data.covid19india.org/data.json"
        );
        const stateWiseData = response.data.statewise;
        console.log("Fetched state-wise data:", stateWiseData);
        dispatch(setStateWiseData(stateWiseData));
      } catch (error) {
        console.error("Error fetching state-wise data:", error);
      }
    };

    fetchStateWiseData();
  }, [dispatch]);

  useEffect(() => {
    const fetchDailyCases = async () => {
      try {
        const response = await axios.get(
          "https://data.covid19india.org/states_daily.json"
        );
        const dailyCasesData = response.data.states_daily.slice(-21);
        console.log("Fetched daily cases data:", dailyCasesData);
        dispatch(setDailyCases(dailyCasesData));
      } catch (error) {
        console.error("Error fetching daily cases data:", error);
      }
    };

    fetchDailyCases();
  }, [dispatch]);

  return (
    <div className="app-container">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="main">
        <FirstSection className="section" />
        <SecondSection className="section" />
      </div>
    </div>
  );
}

export default App;
