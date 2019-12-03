import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TablePaginationActions} from './table-pagination';
import { selectAllTeams } from '../../../../../redux/team/selectors/team.selectors';
import { Typography } from '@material-ui/core';
import DeleteDialogueButton from '../delete-dialogue-box/delete-dialogue-box';

import {useStyles2, AvatarStyled} from './styles';
import EditDialogueButton from '../edit-dialogue-box';

const AllTeamsTable = ({allTeams}) =>  {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = allTeams ? rowsPerPage - Math.min(rowsPerPage, allTeams.length - page * rowsPerPage) : null;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Short Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {allTeams ? allTeams.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => 
              <TableRow key={row.id}>

                <TableCell component="th" scope="row">
                  <AvatarStyled src={row.logo}>
                  </AvatarStyled>
                </TableCell>

                <TableCell>
                    <Typography variant='h6'>{row.team_name}</Typography>
                </TableCell>

                <TableCell>
                    <Typography variant='subtitle2'>{row.team_short}</Typography>
                </TableCell>

                <TableCell>
                  <EditDialogueButton row={row}/>

                </TableCell>
                <TableCell>

                  <DeleteDialogueButton row={row}/>

                </TableCell>
              </TableRow>
            ) : <TableRow><TableCell>'loading teams...'</TableCell></TableRow>}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={allTeams ? allTeams.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}

const mapStateToProps = createStructuredSelector ({
    allTeams: selectAllTeams,

});

export default connect(mapStateToProps)(AllTeamsTable);