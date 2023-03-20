import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

const rows = [
  { id: 1, name: 'John Doe', age: 25, email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', age: 32, email: 'janesmith@example.com' },
  { id: 3, name: 'Bob Johnson', age: 40, email: 'bobjohnson@example.com' },
  { id: 4, name: 'Alice Williams', age: 28, email: 'alicewilliams@example.com' },
  { id: 5, name: 'Tom Brown', age: 45, email: 'tombrown@example.com' },
];

function DataTablePageOne({ style }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={style}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DataTablePageOne;
