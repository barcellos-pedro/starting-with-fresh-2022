import { HandlerContext, Handler } from "$fresh/server.ts";

export const handler: Handler = async (req: Request, ctx: HandlerContext) => {
  const url = new URL(req.url);
  const search = url.searchParams.get("type");

  if (search === "400") {
    return ctx.renderNotFound();
  } else if (search === "500") {
    throw new Error("Error thrown to show custom error page");
  }

  return await ctx.render();
};

export default function ErrorsPage() {
  return (
    <main class="flex flex-col gap-3 justify-center items-center h-screen">
      <ul class="flex flex-col gap-3">
        <li>
          <a href="/errors?type=400" class="hover:underline">
            400 page ❔
          </a>
        </li>
        <li>
          <a href="/errors?type=500" class="hover:underline">
            500 page ❌
          </a>
        </li>
      </ul>
      <a href="/" class="font-semibold hover:underline">
        Go home 🏠
      </a>
    </main>
  );
}
