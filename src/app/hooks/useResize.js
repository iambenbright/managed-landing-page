const { useState, useEffect } = require('react');

// useResize calculates the current window size and
// returns the value. It also dynamically calculates the
// window size as the browser resizes
export function useResize() {
  let [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function getScreenSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', getScreenSize);
    return () => window.removeEventListener('resize', getScreenSize);
  });

  return screenSize;
}
