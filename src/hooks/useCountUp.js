import { useEffect, useState } from 'react';

export const useCountUp = (max, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * max);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [max, duration]);

  return count;
}
