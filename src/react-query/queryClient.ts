import { QueryClient } from "@tanstack/react-query";

const queryErrorHandler = (error: unknown) => {
  const title =
    error instanceof Error ? error.message : "An unknown error occurred";

  alert(title);
};

export const genereteQueryClient = (): QueryClient => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });

  return queryClient;
};

export const queryClient = genereteQueryClient();
