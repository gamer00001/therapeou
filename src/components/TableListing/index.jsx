import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DoctorsListingMock } from "../../constants/Overview";
import CButton from "../CButton";

import RatingIcon from "../../assets/rating-star.png";

import styles from "./styles.module.scss";
import "./table.scss";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {DoctorsListingMock.map((item) => {
              return (
                <TableCell className={styles.columnName}>
                  {item.columnName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {DoctorsListingMock.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className={styles.columnValue}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>

              <TableCell className={styles.columnValue}>{row.status}</TableCell>

              <TableCell
                className={`${styles.columnValue} ${styles.ratingImg}`}
              >
                <img
                  src={RatingIcon}
                  alt="rating-icon"
                  className={styles.ratingIcon}
                />
                {row.rating}
              </TableCell>

              <TableCell className={`${styles.columnValue} font-bold`}>
                {row.fee}
              </TableCell>

              <TableCell className={styles.columnValue}>
                <CButton title="View" customClassName={styles.viewBtn} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
