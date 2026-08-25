import DigitalClock from "./DigitalClock";
import React from "react";

type AppState = {
  showClock: boolean;
};

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleClock}>Bật/Tắt đồng hồ</button>

        {this.state.showClock && <DigitalClock />}
      </div>
    );
  }
}
