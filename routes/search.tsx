import {
  HandlerContext,
  Handlers,
  PageProps,
} from 'https://deno.land/x/fresh@1.1.2/server.ts';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Fred'];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers = {
  GET(req: Request, ctx: HandlerContext) {
    const url = new URL(req.url);
    const query = url.searchParams.get('search') || '';
    let results: string[] = [];

    if (query.trim().length > 0) {
      results = NAMES.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return ctx.render({ results, query });
  },
};

export default function SearchPage({ data }: PageProps<Data>) {
  const { query, results } = data;
  const hasResults = results.length > 0;

  return (
    <main class="p-10">
      <form>
        <label for="search" class="block">
          Search
        </label>
        <input
          class="outline-none border-b-2 border-l-0 border-r-0 border-t-0"
          type="search"
          name="search"
          id="search"
          defaultValue={query || ''}
        />
        <button
          type="submit"
          class="bg-green-600 text-white px-5 py-1 rounded ml-3"
        >
          Search
        </button>
        <a href="/search" class="bg-gray-400 text-white px-5 py-1 rounded ml-3">
          Clear
        </a>
      </form>

      {hasResults ? (
        <section>
          <p>Search results for: {query}</p>

          {results.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </section>
      ) : (
        <>
          <p>Try searching a name from the list below:</p>
          <p>{NAMES.join(', ')}</p>
        </>
      )}
    </main>
  );
}
