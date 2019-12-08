import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";

import { useStyles2 } from "./styles";
import TableHeaderComponent from "./table-header";
import TableBodyComponent from "./table-body";
import TableFooterComponent from "./table-footer";

const SelectMatchdayTable = ({ data, headerArray, rowType }) => {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHeaderComponent rowType={rowType} />
          <TableBodyComponent
            data={data}
            rowsPerPage={rowsPerPage}
            page={page}
            rowType={rowType}
          />
          <TableFooterComponent
            data={data}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Table>
      </div>
    </Paper>
  );
};

export default SelectMatchdayTable;
