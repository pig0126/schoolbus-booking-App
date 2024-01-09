import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toast.css'; // 引入样式文件
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Toast = () => {
  const [showToast, setShowToast] = useState(true);

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    showToast && (
      <div className="toast show" style={{position: 'absolute', top: -60, right: 20 }}>
        <div className="toast-body">
          <strong className="mr-auto">
            <FontAwesomeIcon icon={faVolumeUp} className="mr-2" />
          </strong>
          违约3次将无法预约校车！
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={closeToast}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    )
  );
};

export default Toast;