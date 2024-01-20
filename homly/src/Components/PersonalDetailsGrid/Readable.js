import React from "react";
import { useState, useContext } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const Readable = (props) => {
  const { handleEditId } = useContext(EditPersonalDetailsContext);
  const handleSave = () => {
    {
      props.id && handleEditId('');
    }
    console.log("save");
  };

  return (
    <Grid container key={props.id}>
      <Grid item md={4}>
        <Typography variant="h6" fontWeight={"regular"} component="div">
          {props.lable}
        </Typography>
      </Grid>
      <Grid item md={6}>
      <TextField id="outlined-basic" value={props.value} variant="outlined" size="small" />
      </Grid>
      <Grid item md={2}>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "primary.main" }}
          style={{ display: props.editable ? "block" : "none" }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Readable;
