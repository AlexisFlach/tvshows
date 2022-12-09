import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios";
import { keys } from "../../../react-query/constants";
import { showListType } from "../../../types/show/showList.types";
import { showListSearchType } from "../../../types/show/showListSearch.types";

const searchShows = async (
  searchTerm: string
): Promise<showListSearchType[]> => {
  const { data } = await axiosInstance.get(`/search/shows?q=${searchTerm}`);
  return data;
};

const getShows = async (): Promise<showListType[]> => {
  const { data } = await axiosInstance.get("/shows");
  return data;
};

export const useShows = (): showListType[] | [] => {
  const fb: [] = [];
  const { data = fb } = useQuery([keys.shows], getShows);
  return data;
};

export const useSearchShows = (
  searchTerm: string
): showListSearchType[] | [] => {
  const fb: [] = [];
  const { data = fb } = useQuery([keys.shows, searchTerm], () =>
    searchShows(searchTerm)
  );
  return data;
};

// const usePrefetchShows = (): void => {
//   const queryClient = useQueryClient();
//   const prefetchShows = () => {
//     queryClient.prefetchQuery([keys.shows], getShows);
//   };
// };
