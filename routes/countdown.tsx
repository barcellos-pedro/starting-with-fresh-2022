import Countdown from '../islands/Countdown.tsx';

export default function CountdownPage() {
  const date = new Date();
  date.setHours(date.getHours() + 3);

  return (
    <main>
      <h1>Countdown</h1>
      <p>
        The big event is happening <Countdown target={date.toISOString()} />.
      </p>
    </main>
  );
}
