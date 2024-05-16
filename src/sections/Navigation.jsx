// Navigation.jsx

import React, { useState } from "react";
import { FaGlobe, FaLocationDot } from "react-icons/fa6";
import { SiReadme } from "react-icons/si";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import ModalComponent from "../components/Modalcomponent";
import { setCurrentStateCode } from "../reducers/dataSlice";
import "./Navigation.css";

function Navigation() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="navigation"
      onMouseEnter={() => dispatch(setCurrentStateCode("TT"))}
    >
      <div data-tooltip-id="location" data-tooltip-content="Logo">
        <FaLocationDot size={50} />
      </div>
      <Tooltip id="location" />
      <div data-tooltip-id="readme" data-tooltip-content="Click ME">
        <SiReadme size={50} className="icon" onClick={openModal} />
      </div>
      <Tooltip id="readme" />
      <div data-tooltip-id="portfolio" data-tooltip-content="Portfolio-website">
        <a href="https://arpit-singh.netlify.app/" target="_blank">
          <FaGlobe size={50} className="icon" />
        </a>
      </div>
      <Tooltip id="portfolio" />
      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default Navigation;
