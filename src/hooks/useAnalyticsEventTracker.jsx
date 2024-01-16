import React from "react";
import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="category") => {
  const eventTracker = (action = "action", label = "label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;