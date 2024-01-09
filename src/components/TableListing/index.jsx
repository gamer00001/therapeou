import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./styles.module.scss";
import "./table.scss";

export default function BasicTable({
  headers = [],
  listing,
  showBorderBottom = false,
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={`${showBorderBottom && "show-border-bottom"}`}>
            {headers.map((item) => {
              return (
                <TableCell className={styles.columnName}>
                  {item.columnName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {listing.map((row, index) => (
            <>
              <TableRow
                key={index}
                className={`tableRow ${
                  showBorderBottom && "show-border-bottom"
                }`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.entries(headers).map(
                  ([headerKey, headerValue], cellIndex) => {
                    // Exclude the last cell from having the click function
                    const cellContent = row[headerValue.columnKey];

                    console.log({ row, headerValue });

                    return (
                      <TableCell
                        key={headerKey}
                        className={styles.columnValue}

                        // onClick={
                        //   isLastCell
                        //     ? undefined
                        //     : () => handleRowClick && handleRowClick(row)
                        // }
                        // className={
                        //   isLastCell
                        //     ? "exclude-click"
                        //     : "tableCell cursor-pointer"
                        // }
                      >
                        {cellContent}
                      </TableCell>
                    );
                  }
                )}
              </TableRow>
            </>
            // <TableRow
            //   key={row.name}
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            // >
            //   <TableCell
            //     className={styles.columnValue}
            //     component="th"
            //     scope="row"
            //   >
            //     <div className={styles.profileIconBlock}>
            //       <img
            //         src={row?.profileImage ?? ProfileIcon}
            //         alt="rating-icon"
            //         className={styles.profileIcon}
            //       />

            //       {row.name}
            //     </div>
            //   </TableCell>

            //   <TableCell className={styles.columnValue}>{row.status}</TableCell>

            //   <TableCell
            //     className={`${styles.columnValue} ${styles.ratingImg}`}
            //   >
            //     <img
            //       src={RatingIcon}
            //       alt="rating-icon"
            //       className={styles.ratingIcon}
            //     />
            //     {row.rating}
            //   </TableCell>

            //   <TableCell className={`${styles.columnValue} font-bold`}>
            //     {row.fee}
            //   </TableCell>

            //   <TableCell className={styles.columnValue}>
            //     <CButton
            //       title="View"
            //       customClassName={styles.viewBtn}
            //       onClick={() => handleViewBtn(row)}
            //     />
            //   </TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
