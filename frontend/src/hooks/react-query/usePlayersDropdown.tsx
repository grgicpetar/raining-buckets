import { usePaginatedQuery } from "react-query";
import axios from "axios";
import { PlayerType } from "../../types/player";

type getPlayersParams = { searchInput: string };

const getPlayersDropdown = async (
  queryName: string,
  { searchInput }: getPlayersParams
) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/players/dropdown?name=${searchInput}`
  );

  return data;
};

export default function usePlayersDropdown(searchInput: string) {
  return usePaginatedQuery<PlayerType[]>(
    ["players", { searchInput }],
    getPlayersDropdown,
    {
      enabled: searchInput.trim().length > 0,
    }
  );
}
