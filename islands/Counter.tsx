import { useEffect, useState } from 'preact/hooks';
import { Button } from '../components/Button.tsx';

interface CounterProps {
  initialValue: number;
}

export default function Counter({ initialValue }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  return (
    <>
      <p class="font-bold text-xl">Count: {count}</p>
      <div class="flex gap-3">
        <Button
          class="rounded px-3 py-1 hover:bg-gray-200"
          onClick={() => setCount(count - 1)}
        >
          -1
        </Button>

        <Button
          class="rounded px-3 py-1 hover:bg-gray-200"
          onClick={() => setCount(count + 1)}
        >
          +1
        </Button>
      </div>
    </>
  );
}
