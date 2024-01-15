import React, { useState, useRef, useEffect } from 'react';
import './Drawer.css'; // Assuming you have CSS for drawer styles
import './App.css'; // Assuming you have CSS for app styles
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const Drawer = ({ content, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const hideDrawer = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`drawer-container ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content" ref={drawerRef}>
        <div className="drawer-header" onClick={hideDrawer} style={{cursor: "pointer"}}>
          <ChevronLeftIcon fontSize="large" /> 
          <span>SPENCER JONES</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const SlideInDrawerButton = ({ title, content }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const hideDrawer = () => {
    setIsDrawerOpen(false);
  };

  const useHandleClick = () => {
    showDrawer()
    useAnalyticsEventTracker(`${title}_resume_viewed`)
  };

  return (
    <div>
      <button className="drawer-button" onClick={useHandleClick}>{title}<ChevronRightIcon fontSize='large' /></button>
      {isDrawerOpen && <Drawer title={title} content={content} onClose={hideDrawer}/>}
    </div>
  );
};
