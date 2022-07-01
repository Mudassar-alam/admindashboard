import * as React from "react";
import "./dataTable.scss";
import { Link, useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { async } from "@firebase/util";
import { doc, deleteDoc, onSnapshot } from "firebase/firestore";
function DataTable() {
  const [data, setData] = useState([]);

  // const params = useParams()

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

    //listen Data (REALTIME UDATES)

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return ()=>{
      unsub();
    }
  }, []);

  console.log(data);

  const handlDelete = async (id) => {
    console.log(id);
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.data !== id));
      console.log("successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "User",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      editable: true,
    },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone",
    //   width: 150,
    //   editable: true,
    // },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            <button className="viewButton">View</button>
            <button
              className="deleteButton"
              onClick={() => handlDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }} className="mainDataTable">
        <div className="datatableTitle">
          Add New User
          <Link
            to="/users/new"
            style={{ textDecoration: "none" }}
            className="link"
          >
            Add New
          </Link>
        </div>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
export default DataTable;
