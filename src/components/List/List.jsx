import React from "react";
import { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Card,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  formControl: {
    margin: "10px",
    minWidth: 120,
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
  container: {
    padding: "25px",
  },
}));

const List = ({ places }) => {
  const classes = useStyles();

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
