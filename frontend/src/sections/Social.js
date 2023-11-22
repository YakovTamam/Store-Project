import React from "react";
import { FaTiktok, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialButton = ({ url, icon }) => (
  <button
    style={socialButton}
    onClick={() => {
      window.open(url, "_blank");
    }}
  >
    {icon}
  </button>
);

export default function Social(props) {
  return (
    <div style={socialContainer}>
      <SocialButton
        url={props.instagram}
        icon={<FaInstagram style={iconStyle} />}
      />
      <SocialButton url={props.tiktok} icon={<FaTiktok style={iconStyle} />} />
      <SocialButton
        url={props.facebook}
        icon={<FaFacebook style={iconStyle} />}
      />
      <SocialButton
        url={props.youtube}
        icon={<FaYoutube style={iconStyle} />}
      />
    </div>
  );
}

const socialContainer = {
  display: "flex",
  width: "100%",
  height: "70px",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const socialButton = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: "black",
};

const iconStyle = {
  fontSize: "20px",
};
