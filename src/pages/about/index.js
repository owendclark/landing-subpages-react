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
            <div className={classes.blob}>
              <img
                src="assets/images/logo.png"
                alt="logo"
                width={500}
                height={500}
                className={classes.cardImage}
              />
            </div>
          </div>
          <div className={classes.contentContainer}>
            <h3 className={classes.subjectHeading}>
              Increasing collaboration one discussion at a time…
            </h3>
            <p className={classes.contentText}>
              <span className={classes.firstLetterContent}>I</span>magine if dad
              and grandpa actually agreed, or understood each other when
              conversing at Thanksgiving…that would be the life, right?
              Well…what if they actually could? What if there was a solution
              that not only fixed micro issues, but macro issues too. Well…
              there is! Perspective offers individuals to express how they feel
              and converse with the other side in a healthy and structured
              way…you never hear that nowadays…Find new Perspectives and value
              human dialogue, right here on your device.
            </p>
          </div>
        </div>
        <div className={classes.cardContainerLeftJustify}>
          <div className={classes.contentContainer}>
            <h3 className={classes.subjectHeading}>
              Putting the “u” back in user…
            </h3>
            <p className={classes.contentText}>
              <span className={classes.firstLetterContent}>B</span>y bolstering
              data protection and altering the way patrons view advertisements
              on Perspective, we give the autonomy back to the user and
              strengthen the relationship between humans and tech. Who really
              wants to be tracked for ads…? I know we don’t.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.blob2}>
              <img
                src="assets/images/image2.jpeg"
                alt="logo"
                width={500}
                height={500}
                className={classes.cardImage}
              />
            </div>
          </div>
        </div>
        <div className={classes.cardContainerLeftJustify}>
          <div className={classes.imageContainer}>
            <div className={classes.blob3}>
              <img
                src="assets/images/image1.png"
                alt="logo"
                width={500}
                height={500}
                className={classes.cardImage}
              />
            </div>
          </div>
          <div className={classes.contentContainer}>
            <h3 className={classes.subjectHeading}>
              Understanding the unthinkable, breaking down the unbearable…
            </h3>
            <p className={classes.contentText}>
              <span className={classes.firstLetterContent}>T</span>rue education
              and learning comes from the understanding of different
              Perspectives, whether they are “unthinkable” to you, or just
              right. By learning to collaborate and converse with individuals of
              different Perspectives, yourself and the world around you will
              begin to open up with new opportunities and ideas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
