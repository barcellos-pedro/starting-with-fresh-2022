import { Head } from '$fresh/runtime.ts';
import Counter from '../islands/Counter.tsx';
import { Image } from '../components/Image.tsx';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div class="max-w-screen-lg flex flex-col gap-3 justify-center items-center">
        <Image
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />

        <p class="my-6 text-2xl">
          Welcome to <span class="font-bold">FRESH</span>
        </p>

        <p>
          Try updating this message in{' '}
          <code class="bg-gray-100 p-1 rounded">./routes/index.tsx</code>
        </p>

        <Counter initialValue={3} />
      </div>
    </>
  );
}
