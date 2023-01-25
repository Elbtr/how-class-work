import { Component } from "react";

import classes from "./ErrorCheck.module.css";

class ErrorCheck extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p className={classes.error}>Something went Wrong!</p>;
    }

    return this.props.children;
  }
}

export default ErrorCheck;
