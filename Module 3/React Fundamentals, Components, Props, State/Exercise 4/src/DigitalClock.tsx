import React, { Component } from "react";

type ClockState = { currentTime: Date };

export default class DigitalClock extends Component<{}, ClockState> {
  private timerID: number | null = null;
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    ((this.timerID = window.setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    })),
      1000);
  }

  componentWillUnmount() {
    if (this.timerID !== null) {
      window.clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <>
        <h2>Đồng hồ điện tử</h2>
        <h1>{this.state.currentTime.toLocaleString()}</h1>
      </>
    );
  }
}
