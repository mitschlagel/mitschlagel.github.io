import React, { useState, useRef, useEffect } from "react";
import { PropTypes } from "prop-types";

import "../Drawer.css";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

Drawer.propTypes = {
  content: PropTypes.element,
  onClose: PropTypes.func,
};

DrawerButton.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};

const Drawer = ({ content, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const hideDrawer = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`drawer-container ${isOpen ? "open" : ""}`}>
      <div className="drawer-content" ref={drawerRef}>
        <div
          className="drawer-header"
          onClick={hideDrawer}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon
            icon={icon({ name: "chevron-left" })}
            className="drawer-header-chevron"
          />
          <span>SPENCER JONES</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const DrawerButton = ({ title, content }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const trackEvent = useAnalyticsEventTracker("resume_views");
  const showDrawer = () => {
    setIsDrawerOpen(true);
    trackEvent(`${title} resume viewed`, `${title} resume viewed`);
  };

  const hideDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <button className="drawer-button" onClick={showDrawer}>
        {title}
        <FontAwesomeIcon
          icon={icon({ name: "chevron-right" })}
          className="drawer-button-chevron"
        />
      </button>
      {isDrawerOpen && (
        <Drawer title={title} content={content} onClose={hideDrawer} />
      )}
    </div>
  );
};
