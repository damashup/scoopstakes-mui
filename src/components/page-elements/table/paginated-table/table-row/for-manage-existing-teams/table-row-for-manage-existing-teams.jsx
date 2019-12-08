import React from "react";
import { TableRow, TableCell, Typography } from "@material-ui/core";
import { AvatarStyled } from "../../styles";
import EditDialogueButton from "../../../../../app/admin/team/manage-existing-team/edit-dialogue-box";
import DeleteDialogueButton from "../../../../../app/admin/team/manage-existing-team/delete-dialogue-box/delete-dialogue-box";

const TableRowsForManageExistingTeams = ({ row }) => {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        <AvatarStyled src={row.logo}></AvatarStyled>
      </TableCell>

      <TableCell>
        <Typography variant="h6">{row.team_name}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="subtitle2">{row.team_short}</Typography>
      </TableCell>

      <TableCell>
        <EditDialogueButton row={row} />
      </TableCell>
      <TableCell>
        <DeleteDialogueButton row={row} />
      </TableCell>
    </TableRow>
  );
};

export default TableRowsForManageExistingTeams;
