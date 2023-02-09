import React from "react";
import { StyledSocial } from "./styles/SocailIcons.styled";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
export default function SocialIcon() {
  return (
    <StyledSocial>
      <li>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="http://Linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocial>
  );
}
