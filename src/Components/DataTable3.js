import { DataGrid } from '@mui/x-data-grid';

// Define columns for the table
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

// Define rows for the table
const rows = [
  { id: 1, lastName: 'Doe', firstName: 'John', age: 35 },
  { id: 2, lastName: 'Smith', firstName: 'Jane', age: 22 },
  { id: 3, lastName: 'Johnson', firstName: 'Bob', age: 45 },
  { id: 4, lastName: 'Williams', firstName: 'Mary', age: 28 },
  { id: 5, lastName: 'Brown', firstName: 'Tom', age: 32 },
];



function DataTablePageThree() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20, 50, 100]}
        pagination
      />
    </div>
  );
}

export default DataTablePageThree;