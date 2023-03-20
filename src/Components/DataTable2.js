import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  dark: {
    "& .MuiDataGrid-cell": {
      color: "#fff",
      background: "transparent",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-row": {
      color: "#fff",
      background: "transparent",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
      "& .MuiDataGrid-cell": {
        color: "#fff",
      },
    },
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];

const rows = [
  { id: 1, lastName: "Doe", firstName: "John", age: 35 },
  { id: 2, lastName: "Smith", firstName: "Jane", age: 22 },
  { id: 3, lastName: "Johnson", firstName: "Bob", age: 45 },
  { id: 4, lastName: "Williams", firstName: "Mary", age: 28 },
  { id: 5, lastName: "Brown", firstName: "Tom", age: 32 },
];

function DataTablePageTwo({ style, darkMode }) {
  const classes = useStyles();

  return (
    <Paper
      className={`${classes.root} ${darkMode ? classes.dark : ""}`}
      style={style}
    >
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          className={`${classes.table} ${darkMode ? classes.dark : ""}`}
          pagination
        />
      </div>
    </Paper>
  );
}

export default DataTablePageTwo;
