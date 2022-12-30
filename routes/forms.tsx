import { HandlerContext, Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/src/server/types.ts";

type UserData = {
  name: string;
  age: number;
};

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async POST(req: Request, ctx: HandlerContext) {
    const formData = await req.formData();
    const values = Object.fromEntries(formData.entries());
    const { name, age } = values;

    if (!name || !age) {
      return await ctx.render(null);
    }

    return await ctx.render({ values });
  },
};

export default function FormsPage({ data }: PageProps<UserData | null>) {
  return (
    <main class="grid place-items-center h-screen">
      <form class="flex flex-col gap-3" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />

        <div class="flex gap-3">
          <button type="submit">Send</button>
          <button type="reset">Clear</button>
        </div>

        {data && (
          <fieldset>
            <legend>POST data</legend>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </fieldset>
        )}
      </form>
    </main>
  );
}
