import React from 'react';

const MapComponent = ({ points }) => {
  // 在这里根据传入的points数组进行地图渲染或其他操作
  return (
    <div>
      {/* 在这里显示地图 */}
      <p>起点: {points[0].keyword}</p>
      <p>终点: {points[1].keyword}</p>
    </div>
  );
};

export default MapComponent;