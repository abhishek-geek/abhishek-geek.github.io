// src/components/SocialIcon.js

import React from "react";

const SocialIcon = ({
  icon,
  url,
  alt,
}: {
  icon: string;
  url: string;
  alt: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <img src={icon} alt={alt} />
    </a>
  );
};

export default SocialIcon;
