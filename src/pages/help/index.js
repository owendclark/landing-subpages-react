import React, { useRef, useState } from "react";
import { send } from "emailjs-com";

import classes from "./classes.module.css";

const HelpPage = () => {
  /*
  const subjectInputRef = useRef();
  const descriptionInputRef = useRef();
  const usernameInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredSubject = subjectInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const helpData = {
      subject: enteredSubject,
      description: enteredDescription,
      username: enteredUsername,
      email: enteredEmail,
    };

    console.log(helpData);
  };
  */

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    username: "",
    email: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    send(
      "service_ih3p8mn",
      "template_fmwjipm",
      formData,
      "user_sGKx5TT6YXUxzHZPgrOqP"
    )
      .then((res) => console.log("Sent Email!", res.status, res.text))
      .catch((err) => console.log("Failed with error", err));
  };

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
        <h1 className={classes.helpText}>Help</h1>
      </header>
      <main className={classes.mainContainer}>
        <section className={classes.faqs}>
          <h1 className={classes.headingText}>FAQs</h1>
          <h3 className={classes.question}>Q: How do I create an article?</h3>
          <h3 className={classes.answer}>
            A: Press the plus icon on the navbar, and select create article.
          </h3>
        </section>
        <section className={classes.concerns}>
          <h1 className={classes.headingText}>
            Custom Concern? We're Here to Help.
          </h1>
          <form onSubmit={onSubmitHandler} className={classes.form}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={onChangeHandler}
              className={classes.textField}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={onChangeHandler}
              className={classes.textField}
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
            />
            <button type="submit" className={classes.button}>
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HelpPage;

/*


<form onSubmit={submitHandler}>
            <div className={classes.inputContainer}>
              <input
                type="text"
                placeholder="Subject"
                className={classes.input}
                ref={subjectInputRef}
              />
              <input
                type="text"
                placeholder="Description"
                className={classes.input}
                ref={descriptionInputRef}
              />
              <input
                type="text"
                placeholder="Username"
                className={classes.input}
                ref={usernameInputRef}
              />
              <input
                type="text"
                placeholder="Email"
                className={classes.input}
                ref={emailInputRef}
              />
              <button>Submit</button>
            </div>
          </form>

*/
