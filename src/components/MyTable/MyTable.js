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

const headersMy = [
  {
    key: 'foo',

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

const rowsMy = [
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

function MyNewTable(props) {
  return (
    <TableContainer title={props.title}>
      <Table>
        <TableHead>
          <TableRow>
            {props.headers.map(header => (
              <TableHeader>{header.header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
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

const MyTable = () => (
  <MyNewTable title="DataTable" headers={headersMy} rows={rowsMy} />
);

export default MyTable;
