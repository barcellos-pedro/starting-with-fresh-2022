import { UnknownPageProps } from '$fresh/server.ts';

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <main class="flex flex-col gap-3 justify-center items-center h-screen">
      <p>
        Uh oh, page <span class="font-semibold">{url.pathname}</span> not found
      </p>
      <p>Error: 404 | page not found</p>
      <a href="/">Go home 🏠</a>
    </main>
  );
}
