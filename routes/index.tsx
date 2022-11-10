import { Head } from '$fresh/runtime.ts';
import Counter from '../islands/Counter.tsx';
import { Image } from '../components/Image.tsx';

export default function HomePage() {
  return (
    <main class="flex flex-col justify-center h-screen">
      <Head>
        <title>Fresh App</title>
      </Head>

      <div class="flex flex-col gap-3 justify-center items-center">
        <Image
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />

        <p class="my-6 text-2xl">
          Welcome to <span class="font-bold">FRESH</span>
        </p>

        <div>
          <p class="font-semibold">Links</p>

          <ul>
            <li>
              <a class="hover:underline" href="/search">
                Search
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/greet/pedro">
                Greet
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/github/barcellos-pedro">
                Github
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/countdown">
                Countdown
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/about">
                About
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/api/hello">
                API hello world
              </a>
            </li>
          </ul>
        </div>

        <p class="text-xl text-green-500 font-semibold">Island component</p>
        <Counter initialValue={3} />
      </div>
    </main>
  );
}
