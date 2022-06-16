import { React, useEffect, useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  return { mode };
}
