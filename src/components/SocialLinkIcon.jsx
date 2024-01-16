import React from "react";

import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

const SocialLinkIcon = ({icon, url, title}) => {
    const trackEvent = useAnalyticsEventTracker('social_link_clicks')
  
    const handleClick = (title) => {
      trackEvent(`${title} link clicked`, `${title} link clicked`)
      return false
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" >
          <img src={icon} alt={title} className={title} onClick={() => handleClick(title)} />
      </a>
    )
  }

  export default SocialLinkIcon;