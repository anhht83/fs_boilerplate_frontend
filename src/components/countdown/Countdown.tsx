import React from "react";
import ReactCountdown from "react-countdown";

export interface ICountdown {
  date?: any;

  renderer?(data: any): any,

  onComplete?(): any
}

const Countdown: React.FC<ICountdown> = ({ date = Date.now(), renderer, onComplete }) => {
  return (
    <ReactCountdown
      date={date}
      onComplete={onComplete}
      renderer={(data) => {
        if (renderer) return renderer(data);
        const { days, hours, minutes, seconds, completed } = data;
        if (completed) {
          return "Completed";
        } else {
          const display = [];
          if (days) display.push(<span key="days"><b>{days}</b>d </span>);
          if (hours) display.push(<span key="hours"><b>{hours}</b>h </span>);
          if (minutes) display.push(<span key="minutes"><b>{minutes}</b>m </span>);
          if (seconds) display.push(<span key="seconds"><b>{seconds}</b>s </span>);
          return <span>{display.map(dTime => dTime)}</span>;
        }
      }}
    />
  );
};

export default Countdown;