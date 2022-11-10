import {
  HandlerContext,
  Handlers,
  PageProps,
} from 'https://deno.land/x/fresh@1.1.2/server.ts';
import { Image } from '../../components/Image.tsx';

interface User {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
}

const url = 'https://api.github.com/users';

export const handler: Handlers = {
  async GET(request: Request, ctx: HandlerContext) {
    const { username } = ctx.params;
    const response = await fetch(`${url}/${username}`);

    if (response.status === 404) {
      // we could return not found page
      // return ctx.renderNotFound();

      return ctx.render(null);
    }

    const user: User = await response.json();
    return ctx.render(user);
  },
};

export default function GithubPage({ data, params }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <main>
      <h1>Github data</h1>
      <p>Request param: {params.username}</p>

      <section class="flex flex-col gap-2 mt-3">
        <p>Name: {data.name}</p>
        <p>Login: {data.login}</p>
        <p>Location: {data.location}</p>
        <Image src={data.avatar_url} class="rounded-sm w-40" />
      </section>

      <a href="/" class="font-semibold hover:underline">
        Go home 🏠
      </a>
    </main>
  );
}
