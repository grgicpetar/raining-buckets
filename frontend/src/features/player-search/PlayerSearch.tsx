import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import {
  Container,
  SearchWrapper,
  InputWrapper,
  Input,
  PlayerItemsContainer,
  ChangePageButton,
} from "./playerSearch.styles";
import PlayerSearchItem from "./player-search-item/PlayerSearchItem";
import usePlayers from "../../hooks/react-query/usePlayers";

export default function PlayerSearch() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isLoading, resolvedData, error, isFetching } = usePlayers(
    pageNumber,
    searchInput
  );

  return (
    <Container name="player-search">
      {resolvedData && (
        <>
          <ChangePageButton
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
          >
            <BsChevronLeft />
          </ChangePageButton>
          <SearchWrapper>
            <InputWrapper>
              <BiSearchAlt
                style={{ position: "absolute", color: "#ff5e24", bottom: 55 }}
              />
              <Input
                onChange={({ target }) => {
                  setSearchInput(target.value);
                  setPageNumber(1);
                }}
                placeholder="Enter player name"
              />
              {isFetching && (
                <Loader
                  type="ThreeDots"
                  color="#ff5e24"
                  height={30}
                  width={30}
                  visible={true}
                  style={{ margin: "auto" }}
                />
              )}
            </InputWrapper>
            <PlayerItemsContainer>
              {resolvedData?.players.map((player, i) => (
                <PlayerSearchItem key={i} player={player} />
              ))}
            </PlayerItemsContainer>
            {resolvedData?.players.length === 0 && <p>No players found.</p>}
          </SearchWrapper>
          <ChangePageButton
            disabled={(resolvedData && resolvedData.count <= 20) || false}
            onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
          >
            <BsChevronRight />
          </ChangePageButton>
        </>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#ff5e24"
          height={100}
          width={100}
          visible={true}
          style={{ margin: "auto" }}
        />
      )}
      {error && <p>There has been an error.</p>}
    </Container>
  );
}
