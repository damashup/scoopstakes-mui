import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TablePaginationActions} from './team-table-pagination';
import {useStyles2, AvatarStyled} from './team-table.styles';
import { selectAllTeams } from '../../../../../../redux/team/selectors/team.selectors';
import { Button } from '@material-ui/core';

const AllTeamsTable = ({allTeams}) =>  {
  console.log(allTeams);
  
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
          <TableBody>
            {allTeams ? allTeams.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => 
              <TableRow key={row.id}>
                <TableCell component="th" scope="row"><AvatarStyled src={row.logo}></AvatarStyled></TableCell>
                <TableCell>{row.team_name}</TableCell>
                <TableCell><Button variant='outlined' color='primary' fullWidth>Edit</Button></TableCell>
                <TableCell><Button variant='outlined' color='secondary' fullWidth>Delete</Button></TableCell>
              </TableRow>
            ) : 'loading teams...'}

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
    allTeams: selectAllTeams
});

export default connect(mapStateToProps)(AllTeamsTable);