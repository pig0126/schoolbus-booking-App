import "./App.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Draggable from 'react-draggable';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapContainer from './MapContainer/MapContainer.js';
import Toast from './Toast/Toast.js';
import TopBar from './TopBar/TopBar.js';
import ProfileComponent from './Profile/Profile';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import portrait from './img/portrait.jpg';
import QRcode from './img/二维码.png';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />

        {/* 底部导航栏 */}
        <Navbar fixed="bottom" bg="light">
          <Container>
            <Nav className="flex-row justify-content-around w-100">
              <Nav.Item>
                <Link to="/" className="nav-link">
                  <i className="bi bi-house-door"></i>
                  <span>首页</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/booking" className="nav-link">
                  <i className="bi bi-calendar-check"></i>
                  <span>我的预约</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/profile" className="nav-link">
                  <i className="bi bi-person"></i>
                  <span>我的</span>
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePageComponent />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

function Homepage() {
  const [infoBarHeight, setInfoBarHeight] = useState(100); // 信息栏初始高度

  // 处理拖动事件
  const handleDrag = (e,ui) => {
    const newHeight = infoBarHeight - ui.deltaY;
    if (newHeight >= 100 && newHeight <= window.innerHeight) {
      setInfoBarHeight(newHeight);
    }
  };

  return (
    <div>
      <div className="App">
        {/*顶部栏 */}
        <TopBar />

        {/* 地图区域 */}
        <div className="map-area">
          <MapContainer />
        </div>

        {/* 信息栏 */}
        <div className="widgets">
          <Toast />
          {/* ...其他widgets... */}
        </div>


        {/* 底部导航栏 */}
        <Navbar fixed="bottom" bg="light">
          <Container>
            <Nav className="flex-row justify-content-around w-100">
              <Nav.Item>
                <Link to="/" className="nav-link">
                  <i className="bi bi-house-door"></i>
                  <span>首页</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/booking" className="nav-link">
                  <i className="bi bi-calendar-check"></i>
                  <span>我的预约</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/profile" className="nav-link">
                  <i className="bi bi-person"></i>
                  <span>我的</span>
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>

    </div>
  );
}

function Booking() {
  const SearchResults = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleCancel = () => {
      setIsVisible(false);
    };

    const [showDialog, setShowDialog] = useState(false);

    const handleStatusClick = () => {
      setShowDialog(true);
    };
  
    const handleCloseClick = () => {
      setShowDialog(false);
    };

    if (!isVisible) {
      return null; // 如果 isVisible 为 false，则不渲染该组件
    }

    return (
      <div id="search-results">
        <div className="search-results" style={{ margin: 20 }}>
          <div className="search-result-card">
            <div className="search-result-header">
              <div className="search-result-date">1月8日</div>
              <div className="search-result-status" onClick={handleStatusClick}>已预约</div>
            </div>
            <div className="search-result-body">
              <div className="search-result-body-text">
                <div className="search-result-time">14:30 ~ 15:15</div>
                <div className="search-result-stations">紫金港 ~ 玉泉</div>
                <div className="search-result-duration">45min</div>
              </div>
              <button className="search-result-reserve-button" style={{ width: 80, marginLeft: '100px' }} onClick={handleCancel}>取消</button>
            </div>
          </div>
        </div>

        {showDialog && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              <div className="dialog-close" onClick={handleCloseClick}>
                关闭
              </div>
              <div>预约二维码</div>
              <div>1月8日 14:30~15:15</div>
              <div>紫金港~玉泉</div>
              <div><img src={QRcode} className="QRcode"/></div>
              <div style={{color: '#55BF40', border: '1px solid #55BF40', padding: '2px 8px', borderRadius: '15px'}}>待使用</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div>
        <TopBar />
        <div className="user-widget">
          <div className="avatar-container">
            <img src={portrait} alt="User Avatar" className="user-avatar" />
          </div>
          <div className="user-info">
            <p className="user-name">钱劲帆</p>
            <p className="user-id">3210101411</p>
          </div>
        </div>
      </div>
      <div className="search-results" style={{ margin: 20 }}>
        <div className="search-result-card">
          <div className="search-result-header">
            <div className="search-result-date">1月7日</div>
            <div className="search-result-status">已预约</div>
          </div>
          <div className="search-result-body">
            <div className="search-result-body-text">
              <div className="search-result-time">14:30 ~ 15:15</div>
              <div className="search-result-stations">紫金港 ~ 西溪</div>
              <div className="search-result-duration">45min</div>
            </div>
            <button className="search-result-reserve-button" style={{ width: 80, marginLeft: '100px' }}>取消</button>
          </div>
        </div>
      </div>
      <SearchResults />
    </div>
  );
}

function ProfilePageComponent() {
  return (
    <div>
      <TopBar />
      <ProfileComponent />
    </div>
  );
}


export default App;