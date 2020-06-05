import React, { Component, Fragment } from "react";
import "./Countdown.css";

export default class Countdown extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1000 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <Fragment>
        <span className="minute">M</span>
        <span className="colon">:</span>
        <span className="minutes">{this.state.time.m}</span>
        &nbsp;
        <span className="second">S</span>
        <span className="colon">:</span>
        <span className="seconds">{this.state.time.s}</span>
      </Fragment>
    );
  }
}
