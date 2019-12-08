import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const TableRowsForSelectMatchDay = ({ row }) => {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        box
      </TableCell>
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

export default TableRowsForSelectMatchDay;
