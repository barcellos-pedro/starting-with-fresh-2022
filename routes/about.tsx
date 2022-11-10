import { HandlerContext, Handlers } from '$fresh/server.ts';

/**
 * Example of a custom handler.
 *
 * Not required for the component route.
 * Renders the component and set a header before returning the response.
 */
export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const response = await ctx.render();
    response.headers.set('X-Custom-Header', 'About Page');
    return response;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page</p>
    </main>
  );
}
