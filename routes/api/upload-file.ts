import { Handlers, HandlerContext } from "$fresh/server.ts";

async function uploadFile(file: File) {
  if (!file) {
    throw new Error("Please provide a file to upload");
  }

  try {
    const randomId = crypto.randomUUID();
    let extension = "";

    if (file.type.includes("image")) {
      extension = file.type.substring(file.type.indexOf("/") + 1);
    } else if (file.type.includes("text")) {
      extension = "txt";
    }

    const fileName = `${file.name}-${randomId}.${extension}`;
    const path = `${Deno.cwd()}/static/uploads/${fileName}`;

    const newImage = await Deno.open(path, {
      create: true,
      write: true,
    });

    await file.stream().pipeTo(newImage.writable);

    newImage.close();

    return fileName;
  } catch (error) {
    throw error;
  }
}

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    try {
      const formData = await req.formData();
      const data = Object.fromEntries(formData.entries());
      const file = data.file as File;

      const filePath = await uploadFile(file);

      return Response.redirect(`http://localhost:8000/${filePath}`);
    } catch (error) {
      console.error(error.message);

      return Response.json(
        {
          message: "File upload error. Try again.",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
  },
};
