import { useState } from "preact/hooks";

type FileInfo = {
  name: string;
  size: number;
  type: string;
};

export default function UploadForm() {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);

  const onSelectFile = (_event: unknown) => {
    const fileInput = document.querySelector("input");
    const file = fileInput?.files?.length ? fileInput.files[0] : null;

    if (!file) {
      return alert("Please select a file to upload.");
    }

    setFileInfo({
      name: file.name,
      type: file.type,
      size: file.size,
    });
  };

  return (
    <form
      method="post"
      action="/api/upload-file"
      encType="multipart/form-data"
      class="w-1/2 mx-auto flex flex-col gap-5 items-start"
    >
      <label htmlFor="file" class="block">
        Select a file
      </label>

      <input type="file" name="file" onInput={onSelectFile} />

      {fileInfo && (
        <fieldset>
          <legend class="font-bold">File to upload</legend>
          <p>Name: {fileInfo.name}</p>
          <p>Type: {fileInfo.type}</p>
          <p>Size: {fileInfo.size}</p>
        </fieldset>
      )}

      <button type="submit" class="bg-blue-500 text-white px-3 py-2 rounded">
        Send
      </button>
    </form>
  );
}
