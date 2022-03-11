import { useEffect } from 'react';
import { connect } from 'react-redux';
import { notification as notificationUtil } from 'antd';

function Notification({ notification: { info, isOpen } }) {
  useEffect(() => {
    if (isOpen) {
      const { type, message, description } = info;
      notificationUtil[type]({ message, description });
    }
  }, [isOpen]);
  return null;
}

function mapStateToProps({ notification }) {
  return { notification };
}

export default connect(mapStateToProps)(Notification);
