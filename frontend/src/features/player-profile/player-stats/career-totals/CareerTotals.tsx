import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { CareerTotalsType } from "../../../../types/careerTotals";
import { Text } from "./career-totals.styles";

type CareerTotalsProps = {
  playerId: string;
};

export default function CareerTotals({ playerId }: CareerTotalsProps) {
  const { isLoading, data, error } = useQuery<{
    data: CareerTotalsType;
  }>(["career-totals", { playerId }], () =>
    axios.get(`http://localhost:3000/players/careertotal/${playerId}`)
  );
  return (
    <>
      <Text>{`Games played: ${data?.data.gamesPlayed}`}</Text>
      <Text>{`Points: ${data?.data.points}`}</Text>
      <Text>{`Assists: ${data?.data.assists}`}</Text>
      <Text>{`Rebounds: ${data?.data.rebounds}`}</Text>
      <Text>{`Blocks: ${data?.data.blocks}`}</Text>
      <Text>{`Steals: ${data?.data.steals}`}</Text>
      <Text>{`Turnovers: ${data?.data.turnovers}`}</Text>
      <Text>{`Field shot percentage: ${
        data?.data.fgPct && (data?.data.fgPct * 100).toFixed(1)
      }%`}</Text>
      <Text>{`Three shot percentage: ${
        data?.data.fg3Pct && (data?.data.fg3Pct * 100).toFixed(1)
      }%`}</Text>
      <Text>{`Free throw percentage: ${
        data?.data.ftPct && (data.data.ftPct * 100).toFixed(1)
      }%`}</Text>
    </>
  );
}