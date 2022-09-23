import React, { useState, useEffect } from 'react';
import './Notifications.css';


function Notifications(props) {

  const [eMessage, doNotDisplayE] = useState(false);
  const [sMessage, doNotDisplayS] = useState(false);

  useEffect(() => {
    doNotDisplayS(true);
    doNotDisplayE(true);
  }, [])

  return (
    <div className="notification-container">
      <div className="notification notification-success">
        {props.successMsg}
      </div>
      <div className="notification notification-error">
        {props.errorMsg}
      </div>
    </div>
  );
}

export default Notifications;