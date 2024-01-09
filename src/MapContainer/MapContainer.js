// MapContainer.js
import React, { useState, useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import BusSearchWidget from 'C:/Users/user/Desktop/my-react-app(2)/src/BusSearchWidget/BusSearchWidget.js';

const MapContainer = () => {
  const [points, setPoints] = useState([
    { keyword: '紫金港校区', city: '杭州' },
    { keyword: '西溪校区', city: '杭州' }
  ]);

  useEffect(() => {
    AMapLoader.load({
      key: "fd360dae72c482e3842b9c7b9f7b9b77",
      version: "2.0",
      plugins: ['AMap.Driving'],
    }).then((AMap) => {
      const map = new AMap.Map("container", {
        viewMode: "3D",
        zoom: 12,
        center: [120.15, 30.28],
      });

      const driving = new AMap.Driving({
        map: map,
      });

      // 获取起终点规划线路
      driving.search(points, function (status, result) {
        if (status === "complete") {
          console.log(result);
        } else {
          console.log("获取驾车数据失败：" + result);
        }
      });
    });
  }, [points]);

  const handleSearch = (start, end) => {
    const updatedPoints = [
      { keyword: start, city: '杭州' },
      { keyword: end, city: '杭州' }
    ];
    setPoints(updatedPoints);
  };

  return (
    <div>
      <div id="container" style={{ height: '800px' }}></div>
      <BusSearchWidget onSearch={handleSearch} />
    </div>
  );
};

export default MapContainer;