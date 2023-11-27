export function fetcher<TData, TVariables>(
  query: string,
  method: string,
  data?: any
) {
  return async (): Promise<TData> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}${query}`);

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json;
  };
}
