import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DotButton from "./DotButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useSelector } from "react-redux";

let severitySection = (critical, high, med, low) => (
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button sx={{ backgroundColor: "#CE3733", borderWidth: "0 !important" }}>
      <b>{critical}</b>
    </Button>
    <Button sx={{ backgroundColor: "#EC8830", borderWidth: "0 !important" }}>
      <b>{high}</b>
    </Button>
    <Button sx={{ backgroundColor: "#FDBC2C", borderWidth: "0 !important" }}>
      <b>{med}</b>
    </Button>
    <Button sx={{ backgroundColor: "#37A440", borderWidth: "0 !important" }}>
      <b>{low}</b>
    </Button>
  </ButtonGroup>
);

const columns = [
  { id: "assetItem", label: "Assets", minWidth: 270 },
  { id: "ratingItem", label: "Rating", minWidth: 170, align: "center" },
  {
    id: "totalVulnerabilitiesItem",
    label: "Total Vulnerabilities",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "severityItem",
    label: "Severity",
    minWidth: 270,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "btnItem",
    label: "",
    minWidth: 170,
    align: "right",
  },
];

export default function StickyHeadTable() {
  let dashboardInfo = useSelector((state) => state.dashboardInfo.data);
  let data = dashboardInfo.assets.map((item) => {
    return {
      _id: item.id,
      assetName: item.name,
      rating: item.rating,
      totalVulnerabilities: item.totalVulnerabilities,
      criticalSeverity: item.critical == "NA" ? "-" : item.critical,
      highSeverity: item.high == "NA" ? "-" : item.high,
      mediumSeverity: item.medium == "NA" ? "-" : item.medium,
      lowSeverity: item.low == "NA" ? "-" : item.low,
    };
  });

  let rows = [];

  rows = data.map((item) => {
    return {
      assetItem: item.assetName,
      ratingItem: item.rating,
      totalVulnerabilitiesItem: item.totalVulnerabilities,
      severityItem: severitySection(
        item.criticalSeverity,
        item.highSeverity,
        item.mediumSeverity,
        item.lowSeverity
      ),
      btnItem: <DotButton />,
    };
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table-box">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "600" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
