import React from 'react'
import { TableBody, TableRow, TableCell } from '@material-ui/core'
import TableRowsForSelectMatchDay from '../table-row/for-select-matchday';
import TableRowsForManageExistingTeams from '../table-row/for-manage-existing-teams';
import TableRowsForTeamsForRound from '../table-row/for-teams-for-round/table-row-for-teams-for-round';

const TableBodyComponent = ({data, rowsPerPage, page, rowType}) => {

    const emptyRows = data
    ? rowsPerPage -
      Math.min(rowsPerPage, data.length - page * rowsPerPage)
    : null;

    return (
        <TableBody>
            {data ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                    if(rowType === 'SelectMatchday') return <TableRowsForSelectMatchDay row={row} key={row.id}/>
                    if(rowType === 'ManageExistingTeams') return <TableRowsForManageExistingTeams row={row} key={row.id}/>
                    if(rowType === 'SelectTeamsForRound') return <TableRowsForTeamsForRound row={row} key={row.id}/>
                })
            ) : (
              <TableRow>
                <TableCell>'loading teams...'</TableCell>
              </TableRow>
            )}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
    )
}

export default TableBodyComponent
