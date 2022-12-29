import { HandlerContext, Handler } from "$fresh/server.ts";

export const handler: Handler = (
  _req: Request,
  _ctx: HandlerContext
): Response => {
  return new Response("Hello Deno 🦕");
};
