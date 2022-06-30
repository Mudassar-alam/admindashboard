import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./dataTable.scss";
import { Link } from "react-router-dom";

import { DataGrid} from '@mui/x-data-grid';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     age: 35,
//     country: "Canada",
//     status: "clear",
//   },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     country: "Australia",
//     status: "pending",
//   },
//   {
//     id: 3,
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     country: "USA",
//     status: "clear",
//   },
//   {
//     id: 4,
//     lastName: "Stark",
//     firstName: "Arya",
//     age: 16,
//     country: "Pakistan",
//     status: "clear",
//   },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     age: null,
//     country: "Oman",
//     status: "pending",
//   },
//   {
//     id: 6,
//     lastName: "Melisandre",
//     firstName: "Davis",
//     age: 150,
//     country: "Dubai",
//     status: "clear",
//   },
//   {
//     id: 7,
//     lastName: "Clifford",
//     firstName: "Ferrara",
//     age: 44,
//     country: "UK",
//     status: "pending",
//   },
//   {
//     id: 8,
//     lastName: "Frances",
//     firstName: "Rossini",
//     age: 36,
//     country: "UAE",
//     status: "pending",
//   },
//   {
//     id: 9,
//     lastName: "Roxie",
//     firstName: "Harvey",
//     age: 65,
//     country: "Pakistan",
//     status: "pending",
//   },
// ];

function DataTable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
 
  ];
  
    
 
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        
      </div>
    </>

    // <div className="mainDataTable">
    //   <div className="datatableTitle">
    //     Add New User
    //     <Link to="/users/new" style={{ textDecoration: "none" }} className='link'>
    //       Add New
    //     </Link>
    //   </div>
    //   <TableContainer>
    //     <Table>
    //       <TableHead className="tableHead">
    //         <TableRow>
    //           <TableCell className="tableHeading">User Id</TableCell>
    //           <TableCell className="tableHeading">First Name</TableCell>
    //           <TableCell className="tableHeading">Last Name</TableCell>
    //           <TableCell className="tableHeading">Age</TableCell>
    //           <TableCell className="tableHeading">Country</TableCell>
    //           <TableCell className="tableHeading">Status</TableCell>
    //           <TableCell className="tableHeading">Action</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.map((row) => (
    //           <TableRow key={row.name}>
    //             <TableCell className="tableCell">{row.id}</TableCell>
    //             <TableCell className="tableCell">{row.firstName}</TableCell>
    //             <TableCell className="tableCell">{row.lastName}</TableCell>
    //             <TableCell className="tableCell">{row.age}</TableCell>
    //             <TableCell className="tableCell">{row.country}</TableCell>
    //             <TableCell className="tableCell">
    //               <a className={`${row.status}`}>{row.status}</a>
    //             </TableCell>
    //             <TableCell className="tableCell">
    //               <div className="cellAction">
    //                 <Link to="/users/id" style={{ textDecoration: "none" }}>
    //                   <div className="viewButton">View</div>
    //                 </Link>

    //                 <div className="deleteButton">Delete</div>
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </div>
  );
}
export default DataTable;
