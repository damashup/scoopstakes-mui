import React from "react";
import { TableRow, TableCell, TableHead } from "@material-ui/core";
import {
  SelectMatchdayHeaderArray,
  ManageExistingTeamsArray,
  SelectTeamsForRound
} from "./header-arrays";

const TableHeaderComponent = ({ rowType }) => {
  var headerArray;

  if (rowType === "SelectMatchday") {
    headerArray = SelectMatchdayHeaderArray;
  } else if (rowType === "ManageExistingTeams") {
    headerArray = ManageExistingTeamsArray;
  } else if (rowType === "SelectTeamsForRound") {
    headerArray = SelectTeamsForRound;
  }

  return (
    <TableHead>
      <TableRow>
        {headerArray.map(header => (
          <TableCell key={header.id}>{header.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderComponent;
