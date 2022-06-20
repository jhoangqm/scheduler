import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      // if replace is truthy, remove the last element of the array history
      history.pop();
      // changes the state with setHistory and creates a shallow copy "..." of history and adds, newMode to the array
      setHistory([...history, newMode]);
    } else {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  }

  function back() {
    if (history.length > 1) {
      // returns the element that was removed if history array lenght is bigger than 1
      history.pop();
      // this will remove one length from the array
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}
