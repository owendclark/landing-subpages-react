import React from "react";

import classes from "./classes.module.css";

const FAQ = (props) => {
  return (
    <div className={classes.faq}>
      <h3 className={classes.question}>Q: {props.question}</h3>
      <h3 className={classes.answer}>A: {props.answer}</h3>
    </div>
  );
};

export default FAQ;
