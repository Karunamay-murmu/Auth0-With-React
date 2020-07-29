import React, { Component } from "react";

export default class Public extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    fetch("/public")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not OK.");
      })
      .then((response) => {
        this.setState({ message: response.message });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}
