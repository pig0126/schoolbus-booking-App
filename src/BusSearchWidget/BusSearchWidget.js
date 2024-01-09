import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BusSearchWidget.css';
import Draggable from 'react-draggable';
import Toast from 'C:/Users/user/Desktop/my-react-app(2)/src/Toast/Toast.js'; // 假设Toast在相同的src目录下
import { useNavigate } from 'react-router-dom';

function BusSearchWidgetComponent({ onSearch }) { // 更改组件名称以避免冲突
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedStart, setSelectedStart] = useState('紫金港校区');
  const [selectedEnd, setSelectedEnd] = useState('西溪校区');
  const [searchResults, setSearchResults] = useState([]);
  const [infoBarHeight, setInfoBarHeight] = useState(100); // 信息栏初始高度
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate('/booking'); // 这里的'/booking'是你想要导航到的路径
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedStart === '' || selectedEnd === '') {
      alert('请选择起点和终点');
      return;
    }
    onSearch(selectedStart, selectedEnd);
    console.log('Search for buses...');
    const results = [
      { date: '2024-1-8', startTime: '14:30', endTime: '15:15', startStation: '起点站X', endStation: '终点站X', duration: '45分钟', status: '可预约' },
      // ...更多模拟结果
    ];
    setSearchResults(results); // 更新查询结果状态
    console.log('Search for buses...');
  }; // 修复了未闭合的函数体

  // 处理拖动事件
  const handleDrag = (e, ui) => {
    const newHeight = infoBarHeight - ui.deltaY;
    if (newHeight >= 100 && newHeight <= window.innerHeight) {
      setInfoBarHeight(newHeight);
    }
  };

  return (
    <Draggable axis="y" onDrag={handleDrag} cancel=".widgets">
      {/* 信息栏 */}
      <div className="info-bar" style={{ height: `${infoBarHeight}px` }}>
        {/* 拖动手柄 */}
        <div className="drag-handle">
          <div className="handle-line"></div>
          <div className="handle-line"></div>
          <div className="handle-line"></div>
        </div>
        {/* Widgets */}
        <div className="widgets">
          <Form onSubmit={handleSubmit} className="bus-search-widget">
            <div className="location-selector">
              <Form.Control as="select" custom onChange={(e) => setSelectedStart(e.target.value)}>
                <option>紫金港校区</option>
                <option>玉泉校区</option>
                <option>西溪校区</option>
                <option>之江校区</option>
                <option>华家池校区</option>
                {/* Add more options here */}
              </Form.Control>
              <AiOutlineSwap size={48} className="swap-icon" />
              <Form.Control as="select" custom onChange={(e) => setSelectedEnd(e.target.value)}>
                <option>紫金港校区</option>
                <option>玉泉校区</option>
                <option>西溪校区</option>
                <option>之江校区</option>
                <option>华家池校区</option>
                {/* Add more options here */}
              </Form.Control>
            </div>
            <div className="date-selector">
              <BsCalendar className="calendar-icon" />
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <Button type="submit" className="search-button">
              <BiSearch />
              查询
            </Button>

            <div className="search-results">
              {searchResults.map((result, index) => (
                <div key={index} className="search-result-card">
                  <div className="search-result-header">
                    <div className="search-result-date">{result.date}</div>
                    <div className="search-result-status">{result.status}</div>
                  </div>
                  <div className="search-result-body">
                    <div className="search-result-body-text">
                      <div className="search-result-time">{result.startTime} ~ {result.endTime}</div>
                      <div className="search-result-stations">紫金港 ~ 玉泉</div>
                      <div className="search-result-duration">{result.duration}</div>
                    </div>
                    <button className="search-result-reserve-button" onClick={handleBooking}>预约</button>
                  </div>
                </div>
              ))}

              {searchResults.map((result, index) => (
                <div key={index} className="search-result-card">
                  <div className="search-result-header">
                    <div className="search-result-date">{result.date}</div>
                    <div className="search-result-status2">已约满</div>
                  </div>
                  <div className="search-result-body">
                    <div className="search-result-body-text">
                      <div className="search-result-time">{result.startTime} ~ {result.endTime}</div>
                      <div className="search-result-stations">紫金港 ~ 玉泉</div>
                      <div className="search-result-duration">{result.duration}</div>
                    </div>
                    <button className="search-result-reserve-button2">预约</button>
                  </div>
                </div>
              ))}
            </div>
          </Form>
          <Toast />
          {/* ...其他widgets... */}
        </div>
      </div>
    </Draggable>
  );
};

export default BusSearchWidgetComponent; // 更改导出名称以避免冲突