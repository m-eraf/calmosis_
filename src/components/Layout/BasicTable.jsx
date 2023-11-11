import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

/**
 * Columns example
 * 
 * [
    {
      field: 'fullName',
      headerName: 'Full name',
      type: 'number',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <div>
          <a>{params.row.firstName}</a>
          <br />
          <a>{params.row.lastName}</a>
        </div>
      ),
    },
  ]
 * 
 */

/**
 * Rows Example
 * 
  [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ]
 */

export default function DataTable({ headers, data }) {
  return (
    <div style={{
      width: '100%', fontColor: "white"
    }}>
      <DataGrid
        rows={data}
        columns={headers}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[20, 50]}
        autoHeight
      // loading
      />
    </div >
  );
}
