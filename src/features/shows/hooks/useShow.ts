import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios";
import { showPageType } from "../../../types/show/showPage.types";
import { keys } from "../../../react-query/constants";

const getShow = async (showId: number): Promise<showPageType> => {
  const { data } = await axiosInstance.get(`/shows/${showId}`);
  return data;
};

export const useShow = (showId: number): showPageType | null => {
  const { data } = useQuery([keys.show, showId], () => getShow(showId));
  if (!data) {
    return null;
  }
  return data;
};
