import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const userTimerHook = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setSeconds((seconds) => seconds + 1), 1000);

    return () => clearTimeout(timer);
  });

  return seconds;
};

const Timer = () => {
  let seconds = userTimerHook();
  return (
    <div>
      <div>Lets do it</div>
      Hello Custom Timer is started
      <div>Finish</div>
      {seconds}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
