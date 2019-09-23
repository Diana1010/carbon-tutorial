import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from 'carbon-components-react';

/*
const rows = [
  "ID", "Name" , "Surname"
];
*/
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
];

const rows = [
  {
    id: 'a',
    value: 'Field 1a',
    cells: ['val1', 'val2', 'val7'],
  },
  {
    id: 'b',
    cells: ['val3', 'val4', 'val8'],
  },
  {
    id: 'c',
    cells: ['val5', 'val6', 'val9'],
  },
];

function MyNewTable() {
  return (
    <TableContainer title="DataTable">
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableHeader>{header.header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              {row.cells.map(cell => (
                <TableCell>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const MyTable = () => <MyNewTable />;

export default MyTable;

// Inside of your component's `render` method
