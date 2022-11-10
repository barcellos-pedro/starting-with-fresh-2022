import { UnknownPageProps } from '$fresh/server.ts';

export default function NotFoundPage({ url, route }: UnknownPageProps) {
  console.log(`Not found | url: ${url} | route ${route}`);

  return (
    <main class="flex flex-col gap-3 justify-center items-center h-screen">
      <p>Error: 404 | Not found</p>
      <a href="/" class="font-semibold hover:underline">
        Go home 🏠
      </a>
    </main>
  );
}
