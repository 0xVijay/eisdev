import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import "./MuiTableComponent.css";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const MUITable = (props) => {
  const domainName = props.domainName;
  const pageName = props.pageName;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [ApiErrorMessage, setApiErrorMessage] = useState("");
  const [isApiError, setApiError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(true);

  const [tableData, setTableData] = useState({
    columns: [],
    data: [],
  });

  const tempData = {
    columns: [
      { label: "S.No", name: "sno" },
      { label: "Name", name: "name" },
      { label: "Record", name: "record" },
      {
        label: "Fix Recommendation",
        name: "fixrecommendation",
      },
    ],
    data: [
      {
        sno: 1,
        name: "SPF Record Missing",
        record: "A",
        fixrecommendation: "Recommendation 1",
        recomdesc: "Recommendation Description 1",
      },
      {
        sno: 2,
        name: "SPF Record Missing",
        record: "SPF",
        fixrecommendation: "Recommendation 2",
        recomdesc: "Recommendation Description 2",
      },
      {
        sno: 3,
        name: "SPF Record Missing",
        record: "SPF",
        fixrecommendation: "Recommendation 3",
        recomdesc: "Recommendation Description 3",
      },
      {
        sno: 4,
        name: "SPF Record Missing",
        record: "MX",
        fixrecommendation: "Recommendation 4",
        recomdesc: "Recommendation Description 4",
      },
      {
        sno: 5,
        name: "SPF Record Missing",
        record: "MX",
        fixrecommendation: "Recommendation 5",
        recomdesc: "Recommendation Description 5",
      },
      {
        sno: 6,
        name: "SPF Record Missing",
        record: "AA",
        fixrecommendation: "Recommendation 6",
        recomdesc: "Recommendation Description 6",
      },
      {
        sno: 7,
        name: "SPF Record Missing",
        record: "MX",
        fixrecommendation: "Recommendation 7",
        recomdesc: "Recommendation Description 7",
      },
    ],
  };

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: {
          domainName: domainName,
        },
      }),
    };
    var url = "";
    switch (pageName) {
      case "dashboard":
        url =
          "https://pe-eis-centos-node02.lab.appviewx.net:31443/avxapi/consolidated-metrics?gwsource=api";
        break;
      case "search result":
        url =
          "https://pe-eis-centos-node02.lab.appviewx.net:31443/avxapi/consolidated-metrics?gwsource=api";
        break;
      case "search result1":
        url =
          "https://pe-eis-centos-node02.lab.appviewx.net:31443/avxapi/consolidated-metrics?gwsource=api";
        break;
      default:
        // Optional: handle default case
        break;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.log(pageName);
      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            result.columns = result.columns.map((d, idx) => {
              if (d.name === "fixrecommendation") {
                d.options = {
                  customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                      <button
                        class="badge text-bg-primary border border-0 p-2"
                        onClick={() => {
                          getFixRecommendation(value, tableMeta)
                        }}
                      >
                        Fix Recommendation
                      </button>
                    );
                  },
                };
              }
              return d;
            });

            setTableData(tempData);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setApiError(true);
            setApiErrorMessage("something went wrong, please try again!!!");
            
            console.log(tempData);
            setLoading(false);
          }
        );
    }, []);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

  const getFixRecommendation = (value, tableMeta) => {
    try {
      let mdData = {
        title: tableData.data[tableMeta.rowIndex].name
      } 
  
      
      fetch("sdfgsdfsdf.com/sdfsdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payload: {
            domainName: domainName,
          },
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setModalData(mdData);//title, recomdesc
            setDialogOpen(true);
          },
          (error) => {
            setApiError(true);
            setApiErrorMessage("something went wrong, please try again!!!");
            setLoading(false);
          }
        );
    } catch (error) {
      
    }
  };
  const getMuiTheme = () =>
    createTheme({
      components: {
        // Changed from `overrides` to `components` for MUI v5
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              // padding: '16px', // Updated padding here
            },
          },
        },
      },
    });

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getMuiTheme()}>
        <div className="my-custom-datatable">
          {!isLoading && (
            <MUIDataTable
              columns={tableData?.columns}
              data={tableData?.data}
              title="DNS Vulnerability"
            />
          )}
        </div>
        {/* Dialog component to show selected row data */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          TransitionComponent={Transition} // Use Grow transition component
          // Add the sx prop to style the Dialog component
          sx={{
            "& .MuiDialog-paper": {
              // Target the paper element inside the dialog
              width: "500px", // Set the width of the dialog
              maxWidth: "700px", // Ensure it doesn't exceed the width
              // minHeight: '300px',
              // height:'fit-content' // Set the height of the dialog
            },
          }}
        >
          <DialogTitle>{modalData.title}</DialogTitle>
          <DialogContent>
            <Card class="popup-card">
              <CardContent>
                {/* {console.log(selectedRowData)} */}
                <Typography variant="body1" marginLeft="-13px">
                  {selectedRowData.recomdesc}
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MUITable;
