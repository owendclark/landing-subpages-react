import React, { useState } from "react";
import { send } from "emailjs-com";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import FAQs from "./FAQs";
import FAQ from "./FAQ";
import classes from "./classes.module.css";

const HelpPage = () => {
  const [currentFAQ, setCurrentFAQ] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSubmitError, setIsFormSubmitError] = useState(false);

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    username: "",
    email: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setIsFormSubmitError(false);

    send(
      "service_ih3p8mn",
      "template_fmwjipm",
      formData,
      "user_sGKx5TT6YXUxzHZPgrOqP"
    )
      .then((_res) => setIsFormSubmitted(true))
      .catch((err) => console.log("Failed with error", err));
  };

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const previousFAQHandler = () => {
    if (currentFAQ === 0) {
      setCurrentFAQ(FAQs.length - 1);
    } else {
      setCurrentFAQ(currentFAQ - 1);
    }
  };

  const nextFAQHandler = () => {
    if (currentFAQ === FAQs.length - 1) {
      setCurrentFAQ(0);
    } else {
      setCurrentFAQ(currentFAQ + 1);
    }
  };

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
        <section className={classes.faqs}>
          <h1 className={classes.headingText}>FAQs</h1>
          <div className={classes.faqContainer}>
            <NavigateBeforeIcon fontSize="large" onClick={previousFAQHandler} />
            <FAQ
              question={FAQs[currentFAQ].question}
              answer={FAQs[currentFAQ].answer}
            />
            <NavigateNextIcon fontSize="large" onClick={nextFAQHandler} />
          </div>
        </section>
        <section className={classes.concerns}>
          <h1 className={classes.headingText}>
            Custom Concern? We're Here to Help.
          </h1>
          {isFormSubmitted ? (
            <div>
              <h1 className={classes.submittedText}>Help Form Submitted</h1>
            </div>
          ) : (
            <form onSubmit={onSubmitHandler} className={classes.form}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={onChangeHandler}
                className={classes.textField}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={onChangeHandler}
                className={`${classes.textField} ${classes.textArea}`}
                rows={5}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={onChangeHandler}
                className={classes.textField}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChangeHandler}
                className={classes.textField}
                required
              />
              <button type="submit" className={classes.button}>
                Submit
              </button>
              {isFormSubmitError && (
                <p className={classes.errorText}>
                  There was an error submitting your help form, please try again
                </p>
              )}
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default HelpPage;
