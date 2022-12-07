import { Button, createTheme, CssBaseline, Grid, PaletteMode, ThemeProvider, Typography, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { appTheme } from "../themes/theme";
import { ColorContext } from "../contexts/ColorContext";
import { SwitchModeButton } from "../components/SwitchModeButton/SwitchModeButton";
import { Header } from "../components/header/Header";
import axios from "axios";


const sheetID = "1QVK8lhkrPPF-PEZPYpWclhEffLWyt24I"
const departments = [
  { label: " ", value: " " },
  { label: " ", value: " " },
  { label: " ", value: " " },
  { label: " ", value: " " },
]
function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [userName, setUserName] = React.useState<string>("");

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );


  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const onSubmit = (event: any) => {
    console.log(userName);
    event.preventDefault();

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 

        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: 0,
              endColumnIndex: 1,
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 1
            },
            cell: {
              userEnteredValue: {
                "numberValue": 10
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Header />
        <form onSubmit={onSubmit}>
          <Grid container flexDirection={"column"} alignItems="center" padding={"20px"}>
            <Grid item xs={12} sm={6} paddingBottom={"20px"}>
              <TextField
                id="userName"
                label="Input your name"
                value={userName}
                fullWidth
                onChange={event => setUserName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type={"submit"} fullWidth sx={{
                backgroundColor: "#000",
                color: "#fff",
                ":hover": {
                  color: '#000'
                }
              }}>
                Check In
              </Button>
            </Grid>
            {/* <SwitchModeButton />
          <Button color="primary" variant="contained">
            <Typography >
              Primary
            </Typography>
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button> */}
          </Grid>
        </form>
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default MyApp;