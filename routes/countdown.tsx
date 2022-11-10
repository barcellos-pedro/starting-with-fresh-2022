import Countdown from '../islands/Countdown.tsx';

export default function CountdownPage() {
  const date = new Date();
  // Target Date day +1
  // date.setDate(date.getDate() + 1);

  // Target Date hours +1
  // date.setHours(date.getHours() + 1);

  // Target Date minutes +1
  // date.setMinutes(date.getMinutes() + 1);

  // Target Date seconds +1
  date.setSeconds(date.getSeconds() + 10);

  return (
    <main>
      <h1>Countdown</h1>
      <Countdown targetTime={date.toISOString()} />
    </main>
  );
}
