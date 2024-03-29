import React from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import theme from "../../../HomlyTheme";

export default function ReservationCard(props) {
  const buttons = () => {
    if (props.HHreservation === "Ongoing") {
      if (props.HHpayment) {
        return (
          <Stack direction="row">
            <Button>Cancel</Button>
            <Button variant="contained" color="success" endIcon="" disabled>
              Paid
            </Button>
          </Stack>
        );
      } else {
        return (
          <Stack direction="row">
            <Button>Cancel</Button>
            <Button variant="contained" color="error" endIcon="">
              Checkout
            </Button>
          </Stack>
        );
      }
    } else {
      return (
        <Stack direction="row">
          <Button>Review</Button>
        </Stack>
      );
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          width: "100%",
          maxHeight: { xs: "auto", sm: "300px" },
          bgcolor: "#F5F5F5",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid item xs={12} sm={3} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            src="https://amazingarchitecture.com/storage/files/1742/architecture-projects/damith-premathilake-architects/holiday-home/holiday-home-nuwara-eliya-damith-premathilake-architects-1.jpg"
            alt=""
            sx={{ height: "100%", width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column">
            <Typography>{props.HHName}</Typography>
            <Typography>{props.HHAddress}</Typography>
            <Grid container>
              <Grid item xs={7}>
                <Typography>Reserved Date</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHReservedDate}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography>Check in</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHCheckIn}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography>Check out</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHCheckOut}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography>Total Cost</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography>LKR</Typography>
                  <Typography>{props.HHPrice}</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack direction='column' sx={{justifyContent:'space-between' ,height:'100%'}}>
            <Stack direction="column">
              <Grid container>
                <Grid item xs={7}>
                  <Typography>No of Adults</Typography>
                </Grid>
                <Grid item>
                <Box><Typography>{props.HHAdults}</Typography></Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={7}>
                  <Typography>No of Child</Typography>
                </Grid>
                <Grid item>
                  <Box><Typography>{props.HHRooms}</Typography></Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={7}>
                  <Typography>No of Rooms</Typography>
                </Grid>
                <Grid item>
                  <Box><Typography>{props.HHRooms}</Typography></Box>
                </Grid>
              </Grid>
            </Stack>
            <Box>{buttons(props)}</Box>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
