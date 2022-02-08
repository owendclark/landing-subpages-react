import React from "react";

import classes from "./classes.module.css";

const AboutPage = () => {
  return (
    <div className={classes.backgroundContainer}>
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
        <div className={classes.headerTextContainer}>
          <h1 className={classes.aboutText}>About</h1>
        </div>
      </header>
      <main className={classes.mainContainer}>
        <div className={classes.cardContainerLeftJustify}>
          <div className={classes.imageContainer}>
            {/* Background Curves */}
            <img
              src="assets/images/logo.png"
              alt="logo"
              width={500}
              height={500}
              className={classes.cardImage}
            />
          </div>
          <div className={classes.contentContainer}>
            <h3 className={classes.subjectHeading}>
              Increasing collaboration one discussion at a time…
            </h3>
            <p className={classes.contentText}>
              <span className={classes.firstLetterContent}>I</span>magine if dad and
              grandpa actually agreed, or understood each other when conversing
              at Thanksgiving…that would be the life, right? Well…what if they
              actually could? What if there was a solution that not only fixed
              micro issues, but macro issues too. Well… there is! Perspective
              offers individuals to express how they feel and converse with the
              other side in a healthy and structured way…you never hear that
              nowadays…Find new Perspectives and value human dialogue, right
              here on your device.
            </p>
          </div>
        </div>
        <div>
          <div>
            {/* Title */}
            {/* Content */}
          </div>
          <div>
            {/* Background Curves */}
            {/* Image */}
          </div>
        </div>
        <div>
          <div>
            {/* Background Curves */}
            {/* Image */}
          </div>
          <div>
            {/* Title */}
            {/* Content */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
