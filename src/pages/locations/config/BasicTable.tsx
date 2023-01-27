import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { LocationResultsType, ReturnComponentType } from 'types';

type BasicTableType = {
  results: LocationResultsType[];
};

export const BasicTable = ({ results }: BasicTableType): ReturnComponentType => {
  return (
    <TableContainer
      component={Paper}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Table sx={{ minWidth: 400, maxWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small" align="center">
              ID
            </TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Dimension</TableCell>
            <TableCell align="center">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(({ id, name, dimension, type }: LocationResultsType) => (
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{id}</TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{dimension}</TableCell>
              <TableCell align="center">{type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
