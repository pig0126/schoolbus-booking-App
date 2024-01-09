import React from 'react';
import { FaBus, FaArrowLeft } from 'react-icons/fa';
import './TopBar.css'; // 假设你的样式文件叫TopBar.css

const TopBar = ({ onBack }) => {
  return (
    <div className="top-bar">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft />
      </button>
      <div className="title">
        <FaBus className="bus-icon" />
        <span className="title-text">预约校车</span>
      </div>
    </div>
  );
};

export default TopBar;