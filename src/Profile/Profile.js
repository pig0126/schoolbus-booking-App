import React from 'react';
import { useState } from 'react';
import './Profile.css'; // 引入自定义的 CSS 样式
import 'bootstrap/dist/css/bootstrap.min.css'; // 确保你已经引入了bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js';
import portrait from '../img/portrait.jpg';
import QRcode from '../img/二维码.png';

const UserProfile = () => {

  const [showDialog, setShowDialog] = useState(false);

  const handleSearchResultClick = () => {
    setShowDialog(true);
  };

  const handleCloseClick = () => {
    setShowDialog(false);
  };


  return (
    <div className="user-profile">
      <div className="user-widget">
        <div className="avatar-container">
          <img src={portrait} alt="User Avatar" className="user-avatar" />
        </div>
        <div className="user-info">
          <p className="user-name">钱劲帆</p>
          <p className="user-id">3210101411</p>
        </div>
      </div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              我的预约
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{display: 'flex', alignItems: 'center'}}>
            <div class="accordion-body">1月7日，14:30~15:15，紫金港~西溪</div>
            <div className="search-result-status" style={{height:'60%', alignItems:'center'}}>去使用</div>
          </div>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{display: 'flex', alignItems: 'center'}}>
            <div class="accordion-body">1月8日，14:30~15:15，紫金港~玉泉</div>
            <div className="search-result-status" style={{height:'60%', alignItems:'center'}} onClick={handleSearchResultClick}>去使用</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              违约记录
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">2023/11/11，14:30~15:15，紫金港~西溪</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              问题反馈
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="input-group">
              <textarea className="form-control" placeholder="在此输入反馈内容" aria-label="Feedback" id="feedbackInput"></textarea>
            </div>
            <div className="text-end mt-2">
              <button className="btn btn-primary" type="button" onclick="sendFeedback()">发送</button>
            </div>
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
            <div>
              <img src={QRcode} className="QRcode" />
            </div>
            <div style={{ color: '#55BF40', border: '1px solid #55BF40', padding: '2px 8px', borderRadius: '15px' }}>
              待使用
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;