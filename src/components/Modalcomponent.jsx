// ModalComponent.jsx
import React from "react";
import Modal from "react-modal";
import "./Modalcomponent.css";

function ModalComponent({ isOpen, onRequestClose }) {
  return (
    <div className="modal">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <h1 className="readme-heading">README</h1>
        <p className="readme-paragraph">
          Hi, This Assignment is from me(ARPIT SINGH). I have created this fully
          using <b>REACT and REDUX </b> only. <br />
          <b>Structure : </b>We start with App.jsx which is comprised of three
          section : Navigation, First Section (contains "Heading", "Charts" and
          "Table Component"), Second Section (consist of "Heading", "Box and Map
          Component").
          <br />
          It has all five major components you asked in the assignment, these
          are :
          <ul>
            <li>
              <b>Donut Chart</b> which shows three status of cases which shows
              status active(blue), recovered(green), deceased(grey). And centre
              shows total confirmed cases.
            </li>
            <li>
              {" "}
              <b>Line Chart</b> which shows last 7 days data for active,
              recovered and deceased cases count
              <b>
                The API stopped updating data on 16th August2021. So for each
                state data from 10th-Aug-21 to 16th-Aug-21 is shown.
              </b>
            </li>
            <li>
              <b>Table</b> which shows the current count of confirmed, active,
              recovered and deceased.
              <b>
                I have added suitable colors as well on hover effect on the rows
                of table
              </b>
            </li>
            <li>
              <b>Boxes</b> containing Total count of confirmed, active,
              recovered, deceased cases with recent updated date of covid data
              (comes from API).<b>Added hover effect to these boxes as well</b>
            </li>
            <li>
              <b>Choropleth map of India </b> which shows current date confirmed
              cases in every state.
              <b>The current date is static 16th-Aug-2021</b>
            </li>
          </ul>
          <b>
            Functionality wise, every single functionality that was asked in the
            Assignment is completed. <br />
            Initially the Donut chart, Line chart and boxes shows complete data
            of the deafult state code, i.e 'tt'/India but as user hover on any
            of the states on table or choropleth map then the donut chart, line
            chart, and boxes updates the value for that state. And on removing
            the hover , the state code is again set to default i.e. India and
            the Donut Chart, line chart and boxes returns on their original
            count state which is total count.
          </b>
          <br />
          <br />
          <b> All tasks as per Assignment : </b>
          <ol>
            <li>
              Create dashboard using, Html, CSS and (jQuery, or JavaScript or
              React.js) <b>Yes</b>
            </li>
            <li>
              CSS should be created with classes. inline style will not be
              appreciated. choose optimum font style for the dashboard by
              yourself. <b>No inline used</b>
            </li>
            <li>
              Creating dashboard with react.js will be huge plus point. **{" "}
              <b>Used React Only</b>
            </li>
            <li>
              Applying the fundamentals and principles of React.js while
              designing Dashboard, will be awarded huge credits.{" "}
              <b>Props, Hooks, functional components etc.. all used</b>
            </li>
            <li>
              Innovations and creativity in terms of UI and CSS is welcomed.{" "}
              <b>Hover Effects, matching colors etc.. used</b>
            </li>
            <li>
              The Dashboard should be responsive so the UI should adjust itself
              on window resizing.{" "}
              <b>
                The Doughnut and line maps are generated as svg images and cant
                be shrunk too much, so getting some error in that other
                components are all responsive.
              </b>
            </li>
            <li>
              <b>Important:</b> - if user hover on any of the states on table or
              choropleth map, the donut chart, line chart, and boxes should
              update the value for only that state. And on removing the hover
              from any of the states the Donut Chart, line chart and boxes
              should return to its original count state.{" "}
              <b>Fully implemented using REDUX</b>
            </li>
          </ol>
        </p>
        <button onClick={onRequestClose} className="close">
          Close Me
        </button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
