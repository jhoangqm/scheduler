import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    const newHistory = [...history];
    if (replace) {
      // if replace is truthy, remove the last element of the array history
      newHistory.pop();
      newHistory.push(newMode);
      // changes the state with setHistory and creates a shallow copy "..." of history and adds, newMode to the array
      setHistory(newHistory);
    } else {
      newHistory.push(newMode);
      setHistory(newHistory);
    }
    setMode(newMode);
  }

  function back() {
    const newHistory = [...history];
    if (history.length > 1) {
      // returns the element that was removed if history array lenght is bigger than 1
      newHistory.pop();
      // this will remove one length from the array
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}
