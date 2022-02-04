import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

/**
 * Used to determine if the element (param) is scrolled to the bottom
 * @param {*} element 
 * @returns 
 */


const useElementBottom = (element) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  // event handler for determining if the user reached bottom
  const handleScroll = useMemo(() => {
    return throttle(() => {
      const { current } = element; // current holds the reference to element

      // if current scroll from bottom is less than equal to 10px
      const scrollBottom =
        current.scrollHeight - current.scrollTop - current.clientHeight;

      const reachingBottom = scrollBottom <= 10;
      setReachedBottom(reachingBottom);
    }, 1000);
  }, []);

  // effect for binding event listener on element scroll
  useEffect(() => {
    const { current } = element;
    current.addEventListener('scroll', handleScroll);

    return () => current.removeEventListener('scroll', handleScroll);
  }, []);

  return reachedBottom;
};

export default useElementBottom;