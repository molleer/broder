import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper
} from "@material-ui/core";

const format = date => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
};

const DrivingTable = ({ events }) => {
  return (
    <TableContainer style={{ width: 650 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>När?</TableCell>
            <TableCell align="right">Vem är du?</TableCell>
            <TableCell align="right">[Nm]</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(e => (
            <TableRow key={e.id}>
              <TableCell>{format(new Date(e.timestamp))}</TableCell>
              <TableCell align="right">{e.user}</TableCell>
              <TableCell align="right">{e.distance_nm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrivingTable;
