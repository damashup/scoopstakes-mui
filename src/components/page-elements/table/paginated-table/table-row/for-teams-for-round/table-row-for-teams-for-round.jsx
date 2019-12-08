import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const TableRowsForTeamsForRound = ({ row }) => {
  return (
    <TableRow key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.competition.name}</TableCell>
      <TableCell>{row.homeTeam.name}</TableCell>
      <TableCell>
        {row.homeTeamScore} - {row.awayTeamScore}
      </TableCell>
      <TableCell>{row.awayTeam.name}</TableCell>
      <TableCell>{row.status}</TableCell>
    </TableRow>
  );
};

export default TableRowsForTeamsForRound;
