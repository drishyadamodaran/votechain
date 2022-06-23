import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/drishyadamodaran/votechain"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
