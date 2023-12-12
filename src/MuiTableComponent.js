import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MUITable = () => {
  const columns = [
    { label: 'S. No', name: 'sno' },
    { label: 'Name', name: 'name', options: { sort: true } },
    { label: 'Record', name: 'record', options: { sort: true } },
    { label: 'Fix Recommendation', name: 'fixrecommendation'}
  ];

  // Create a custom theme
  const getMuiTheme = () => createTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          padding: '10px', // Adjust padding here
        },
      },
    },
  });

  const options = {
    filterType: 'checkbox',
    responsive: 'standard',
  };

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <div style={{ maxWidth: '100%' }}>
        <MUIDataTable
          columns={columns}
          data = {[
            {
              sno: 1,
              name: "SPF Record Missing",
              record: "A",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 2,
              name: "SPF Record Missing",
              record: "SPF",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 3,
              name: "SPF Record Missing",
              record: "SPF",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 4,
              name: "SPF Record Missing",
              record: "MX",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 5,
              name: "SPF Record Missing",
              record: "MX",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 6,
              name: "SPF Record Missing",
              record: "AA",
              fixrecommendation: "Recommendation"
            },
            {
              sno: 7,
              name: "SPF Record Missing",
              record: "MX",
              fixrecommendation: "Recommendation"
            }
          ]}
          title='DNS Vulnerability'
          options={options}
        />
      </div>
    </ThemeProvider>
  );
};

export default MUITable;
