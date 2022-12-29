import { ErrorPageProps } from "$fresh/server.ts";

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <main class="flex flex-col gap-3 justify-center items-center h-screen">
      <p>Error: 500 | Internal server error</p>
      <p>Message: {(error as Error).message}</p>
      <a href="/" class="font-semibold hover:underline">
        Go home 🏠
      </a>
    </main>
  );
}
