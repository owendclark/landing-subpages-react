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
      </header>
      <main className={classes.mainContainer}>
        <div
          className={`${classes.cardContainerLeftJustify} ${classes.firstCard}`}
        >
          <div className={classes.imageContainer}>
            ``
            <div className={classes.blob}>
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
        <div
          className={`${classes.cardContainerLeftJustify} ${classes.secondCard}`}
        >
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
                src="assets/images/image2.png"
                alt="logo"
                width={500}
                height={500}
                className={classes.cardImage}
              />
            </div>
          </div>
          <div className={classes.waveDivider1}>
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
        <div
          className={`${classes.cardContainerLeftJustify} ${classes.thirdCard}`}
        >
          <div className={classes.imageContainer}>
            <div className={classes.blob3}>
              <img
                src="assets/images/image3.png"
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
          <div className={classes.waveDivider2}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
