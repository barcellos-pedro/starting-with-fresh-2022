import { useEffect, useState } from 'preact/hooks';

/**
 * This is a custom hook that will return a countdown value
 * that will be updated every second.
 */
export function useCountdown(targetTime: string) {
  const target = new Date(targetTime);
  const [now, setNow] = useState(new Date());

  const diff = target.getTime() - now.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remaining = `${days} days, ${hours % 24} hours, ${
    minutes % 60
  } minutes, ${seconds % 60} seconds`;

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      // if the target time has passed, stop the interval
      if (now > target) {
        clearInterval(interval);
      }
      setNow(new Date());
    }, 1000);

    // clear interval on unmount
    return () => clearInterval(interval);
  }, [now, setNow]);

  return { now, target, remaining };
}
