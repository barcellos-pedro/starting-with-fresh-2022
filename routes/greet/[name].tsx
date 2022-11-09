import { PageProps } from '$fresh/server.ts';

export default function GreetPage({ params }: PageProps) {
  const { name } = params;
  return (
    <main>
      <p>Greetings to yout, {name}!</p>
    </main>
  );
}
