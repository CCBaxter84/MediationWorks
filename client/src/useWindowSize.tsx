import * as React from 'react';
import { useState, useEffect } from 'react';

// Custom Hook for keeping track of Screen size
function useWindowSize() {
  const [ size, setSize ] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};

export default useWindowSize;