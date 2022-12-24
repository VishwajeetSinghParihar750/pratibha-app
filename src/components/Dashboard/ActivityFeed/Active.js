import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function Active() {
  let data = [
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#C305B0",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#CE3733",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#128807",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#128807",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#128807",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#128807",
    },
    {
      data:
        "Username (Company Name)  activity (closed the report) to resolved (changeable)",
      color: "#128807",
    },
  ];
  return (
    <div className="">
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.data}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.data}
                </TableCell>
                <TableCell>
                  <FiberManualRecordRoundedIcon
                    sx={{ color: `${row.color}` }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
