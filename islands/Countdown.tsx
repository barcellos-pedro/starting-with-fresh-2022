import { useCountdown } from '../hooks/use-countdown.ts';

interface CountdownProps {
  targetTime: string;
}

/**
 * The target date is passed as a string
 * instead of as a `Date`, because island components props
 * need to be JSON (de)serializable.
 */
export default function Countdown({ targetTime }: CountdownProps) {
  const { now, target, remaining } = useCountdown(targetTime);

  if (now > target) {
    return <p>Event started! 🎉</p>;
  }

  return <p>Time left: {remaining}</p>;
}
