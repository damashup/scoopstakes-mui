import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectLatestSeason} from '../../../../../../redux/season/selectors/select-latest-season';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import {TablePaginationActions} from './all-seasons-table-pagination';
import {useStyles2} from './all-seasons-table.styles';
import {SmallTextContainer} from '../../../../../page-styles/base-styles';

const AllSeasonsTable = ({seasonResults}) =>  {
  
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="custom pagination table">
            {/* <TableHead>
                <TableRow>
                    <TableCell>Rankings</TableCell>
                    <TableCell>Entrant</TableCell>
                    <TableCell>Points/ Entries</TableCell>
                    <TableCell>Total Payout</TableCell>
                </TableRow>
            </TableHead>   */}
          <TableBody>
            {seasonResults.map((row, index) => {
              const postion = index+1;
              const payout = parseFloat(Math.round(row.total_sbd * 100) / 100).toFixed(2);
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.total_points === null ? '-' : postion}
                </TableCell>
                <TableCell > 
                  <span>{row.entrant} {row.eligible_for_payout ? (<SmallTextContainer>member rewards</SmallTextContainer>) : ''}</span>
                </TableCell>
                <TableCell>
                  {row.total_points} 
                  <SmallTextContainer>
                    {(row.total_points===null) ? 'invalid entry' : 'pts'}/ ({row.numberOfEntries}) 
                  </SmallTextContainer>
                </TableCell>
                <TableCell>
                  {row.total_sbd ? `$${payout}` : null}
                </TableCell>
              </TableRow>
            )})}
          </TableBody>    
        </Table>
      </div>
    </Paper>
    
  );
}

const mapStateToProps = createStructuredSelector ({
    latestSeason: selectLatestSeason
});

export default connect(mapStateToProps)(AllSeasonsTable);