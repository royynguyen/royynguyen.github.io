import { Button, createTheme, CssBaseline, Grid, PaletteMode, ThemeProvider, Typography, TextField, Autocomplete } from "@mui/material";
import React, { useEffect } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { appTheme } from "../themes/theme";
import { ColorContext } from "../contexts/ColorContext";
import { SwitchModeButton } from "../components/SwitchModeButton/SwitchModeButton";
import { Header } from "../components/header/Header";
import { UserList } from "../constants";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [user, setUser] = React.useState<any>();
  const [inputValue, setInputValue] = React.useState<string>("");

  const [userDetail, setUserDetail] = React.useState<any>();

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


  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout title="Adidas Checkin">

          <Grid container justifyContent={"flex-start"} height={'100vh'} style={{
            background: `transparent url(/images/bg.jpg) center / cover no-repeat`
          }}>
            <Header />
            <Grid item xs={12} padding={"20px"} height={'100px'}>
              <Autocomplete
                style={{ width: '100%', backgroundColor: 'white' }}
                value={user}
                disablePortal
                id="combo-box-demo"
                options={UserList}
                onChange={(event: any, newValue: any) => {
                  setUser(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                getOptionLabel={(option: any) => {
                  return `${option?.name?.trim().toUpperCase() ?? ""}`;
                }}
                renderOption={(props, option: any) => (
                  <li {...props} key={option.luckyNumber}>
                    {option.name.toUpperCase()}
                  </li>
                )}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField style={{ textTransform: 'uppercase' }} {...params} label="Input your name" />}
              />
            </Grid>
            <Grid item xs={12} padding={"20px"}>
              <Button type={"button"} fullWidth sx={{
                backgroundColor: "#000",
                color: "#fff",
                ":hover": {
                  color: '#000',
                  backgroundColor: '#fff',
                }
              }}
                onClick={() => setUserDetail(user)}>
                Check In
              </Button>
            </Grid>
            {userDetail && (
              <Grid container spacing={1} justifyContent="center" >
                <Grid item xs={12} textAlign="center" >
                  <Typography fontSize={'20px'} pt={'10px'} bgcolor={"rgba(255, 0, 0, 0.2)"} fontWeight='bold' color="white">WELCOME TO TOWNHALL 2022</Typography>
                  <Typography fontSize={'20px'} pb={'10px'} bgcolor={"rgba(255, 0, 0, 0.2)"} fontWeight='bold' color="white">THANKS FOR YOUR ATTENDANCE</Typography>
                </Grid>
                <Grid item container xs={12} >
                  <Grid item xs={4} textAlign="left" >
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" pl={"10px"} fontWeight='bold'>Name: </Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" pl={"10px"} fontWeight='bold'>Department: </Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" pl={"10px"} fontWeight='bold'>Room Number: </Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" pl={"10px"} fontWeight='bold'>Lucky Number: </Typography>
                  </Grid>
                  <Grid item xs={8} textAlign="left">
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" fontWeight='bold'>{userDetail.name.toUpperCase()}</Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" fontWeight='bold'>{userDetail.department}</Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" fontWeight='bold'>{userDetail.roomNumber}</Typography>
                    <Typography fontSize={'12px'} bgcolor={"rgba(255, 0, 0, 0.2)"} color="white" fontWeight='bold'>{userDetail.luckyNumber}</Typography>
                  </Grid>

                </Grid>
              </Grid>
            )}
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
        </Layout>
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default MyApp;