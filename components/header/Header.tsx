import React from "react"
import Grid from '@mui/material/Grid'
import { Link, Typography, useTheme } from "@mui/material"

interface HeaderProps {

}

export const Header: React.FC<any> = ({ }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid container justifyContent={"center"} spacing={0} padding="15px 0px" bgcolor={"black"}>
        <Grid item >
          <Link href="#" underline="none">
            <Typography component="h4" variant="h4" color="white" fontWeight={"bold"}>ADIDAS</Typography>
          </Link>
        </Grid>

      </Grid>

    </React.Fragment>
  )
}