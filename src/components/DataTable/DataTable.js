import React from 'react';
import { DataTable } from 'carbon-components-react';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
} = DataTable;

// Given that we have the following rows with the fields `foo`, `bar`, and `baz`
const rows = [
  {
    id: 'a',
    foo: 'Foo a',
    bar: 'Bar a',
    baz: 'Baz a',
    bac: 'Baz a',
    
    
   
  },
  {
    id: 'b',
    foo: 'Foo b',
    bar: 'Bar b',
    baz: 'Baz b',
    bac: 'Baz a',

    
  },
  {
    id: 'c',
    foo: 'Foo c',
    bar: 'Bar c',
    baz: 'Baz c',
    bac: 'Baz a',
    
      
  },
];

// We would have a headers array like the following
const headers = [
  {
    // `key` is the name of the field on the row object itself for the header
    key: 'foo',
    // `header` will be the name you want rendered in the Table Header
    header: 'Foo',
  },
  {
    key: 'bar',
    header: 'Bar',
  },
  {
    key: 'baz',
    header: 'Baz',
  },
  {
    key: 'bac',
    header: 'Bac',
  },
];


// Inside of your component's `render` method
function MyNewTable() {
  return (
    <DataTable
      rows={rows}
      headers={headers}
      isSortable
      useZebraStyles={false}
      size={null}
      render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
        <TableContainer title="DataTable with expansion">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>               
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
    
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
              
                  {row.isExpanded && (
                    <TableExpandedRow colSpan={headers.length + 1}>
                      <h1>Expandable row content</h1>
                      <p>Description here</p>
                    </TableExpandedRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
/>
  );
}



export default MyNewTable;
