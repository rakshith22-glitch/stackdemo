import React, { PureComponent, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import { styled } from '@mui/material/styles';
function TableData() {
// ----------------------------------------- API -----------------------------------------------------------------------------------------
  const [ userdata,setuserdata]=useState([]);
    useEffect(() => {
        axios.get('https://stacklinedemo.herokuapp.com/data', {
          })
          .then(function (response) {
            console.log(response);
            setuserdata(response.data[0].sales)
          })
        }, [])

// ----------------------------------------- PAGINATION AND TABLE STYLING -----------------------------------------------------------------------------------------

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



        
  return (
    <Paper sx={{ width: '100%' }}>
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">WEEK ENDING </StyledTableCell>
            <StyledTableCell align="center" >RETAIL SALES</StyledTableCell>
            <StyledTableCell align="center">WHOLESALE SALES</StyledTableCell>
            <StyledTableCell align="center">UNITS SOLD</StyledTableCell>
            <StyledTableCell align="center">RETAILER MARGIN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <StyledTableRow 
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center" component="th" scope="row">
                {row.weekEnding}
              </StyledTableCell>
              <StyledTableCell align="center">{row.retailSales}</StyledTableCell>
              <StyledTableCell align="center">{row.wholesaleSales}</StyledTableCell>
              <StyledTableCell align="center">{row.unitsSold}</StyledTableCell>
              <StyledTableCell align="center">{row.retailerMargin}</StyledTableCell>
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
      
        </TableContainer>
        <div style={{marginLeft:"30vw" }}>
          <TablePagination
          style={{marginLeft:"auto", marginRight:"auto"}}
          rowsPerPageOptions={[5, 10, 15, 20]}
        
          count={userdata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
        </Paper>
  );
}

export default TableData;