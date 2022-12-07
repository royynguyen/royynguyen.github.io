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
        <Layout title="Home | Next.js + TypeScript Example">

          <Grid container justifyContent={"flex-start"} height={'100vh'} style={{
            background: `transparent url(https://sneakerdaily.vn/wp-content/uploads/2022/10/giay-adidas-wmns-terrex-free-hiker-primeblue-ambient-blush-fz3129.png) center / contain no-repeat`
          }}>
            <Header />
            <Grid item xs={12} padding={"20px"} height={'100px'}>
              <Autocomplete
                style={{ width: '100%' }}
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
                  return `${option?.name?.trim() ?? ""}`;
                }}
                renderOption={(props, option: any) => (
                  <li {...props} key={option.luckyNumber}>
                    {option.name}
                  </li>
                )}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Input your name" />}
              />
            </Grid>
            <Grid item xs={12} padding={"20px"}>
              <Button type={"button"} fullWidth sx={{
                backgroundColor: "#000",
                color: "#fff",
                ":hover": {
                  color: '#000'
                }
              }}
                onClick={() => setUserDetail(user)}>
                Check In
              </Button>
            </Grid>
            {userDetail && (
              <Grid container spacing={1} justifyContent="center" mt='30px'>
                <Grid item xs={12} textAlign="center">
                  <Typography fontSize={'25px'} fontWeight='bold'>WELCOME TO THE PARTY</Typography>
                  <Typography fontSize={'25px'} fontWeight='bold'>HERE IS YOUR INFORMATION</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography>{userDetail.name}</Typography>
                  <Typography>{userDetail.department}</Typography>
                  <Typography>{userDetail.roomNumber}</Typography>
                  <Typography>{userDetail.luckyNumber}</Typography>
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