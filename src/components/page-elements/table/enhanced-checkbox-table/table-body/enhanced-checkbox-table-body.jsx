import React from "react";
import {connect} from "react-redux"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import { addToSelectedMatchdayListStart, removeMatch } from "../../../../../redux/matchday/actions";
// import { rows } from "../dummy-data";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const EnhancedCheckboxTableBody = ({
    addMatch,
  dense,
  order,
  orderBy,
  page,
  removeMatch,
  rows,
  rowsPerPage,
  selected,
  setSelected
}) => {
  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleClick = (event, id, value) => {
      console.log(value);
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      addMatch(value);
    } else if (selectedIndex === 0) {
        removeMatch(value)
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  return (
    <TableBody>
      {console.log(page, rowsPerPage)}
      {stableSort(rows, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          console.log(row, index);
          const isItemSelected = isSelected(row.id);
          const labelId = `enhanced-table-checkbox-${index}`;
          const competitionName = row.competition.name;
          const homeTeamName = row.homeTeam.name;
          const awayTeamName = row.awayTeam.name;
          const scoreline = `${row.homeTeamScore ? row.homeTeamScore : ""} - ${
            row.awayTeamScore ? row.awayTeamScore : ""
          }`;

          return (
            <TableRow
              hover
              onClick={event => handleClick(event, row.id, row)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox" align='center'>
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </TableCell>
              <TableCell align='center'>{row.id}</TableCell>
              <TableCell align='center'>{competitionName}</TableCell>
              <TableCell align='center'>{row.koTime}</TableCell>
              <TableCell align='center'>{homeTeamName}</TableCell>
              <TableCell align='center'>{scoreline}</TableCell>
              <TableCell align='center'>{awayTeamName}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

const mapDispatchToProps = dispatch => ({
    addMatch: value =>
    dispatch(addToSelectedMatchdayListStart(value)),

    removeMatch: value =>
    dispatch(removeMatch(value))
});

export default connect(null, mapDispatchToProps)(EnhancedCheckboxTableBody);
