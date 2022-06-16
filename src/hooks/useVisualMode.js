import { React, useEffect, useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
  }

  function back() {
    console.log(history);
    if (history.length > 1) {
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}
