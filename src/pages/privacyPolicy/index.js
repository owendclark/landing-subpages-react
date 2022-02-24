import React from "react";
import { Link } from "react-router-dom";

import classes from "./classes.module.css";

const PrivacyPolicyPage = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className={classes.logo}
            width={100}
            height={100}
          />
        </div>
      </header>
      <div className={classes.contentContainer}>
        <h1 className={classes.headerText}>Perspective's Privacy Policy</h1>
        <p className={classes.contentText}>
          When using Perspective, we want you, the user to know and understand
          what we do with your data and how we protect it when navigating
          through Perspective and online.
        </p>
        <br />
        <p className={classes.contentText}>
          To view our terms of privacy, download a copy{" "}
          <Link
            to="/assets/files/privacyPolicy.pdf"
            target="_blank"
            download
            className={classes.link}
          >
            here
          </Link>
          .
        </p>
      </div>
      <div className={classes.bottomWave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
