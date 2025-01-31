import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const App1 = () => {
  return (
    <Box>
      <TextField
        sx={{ margin: "1rem" }}
        label="Outlined"
        variant="outlined"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />

      <Checkbox defaultChecked />

      <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <Box style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Button variant="outlined">outlined</Button>
          <Button variant="contained">contained</Button>
          <Button>text</Button>
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Button variant="contained">primary</Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>{" "}
          <Button variant="contained" color="warning">
            warning
          </Button>{" "}
          <Button variant="contained" color="info">
            info
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "gray",
            }}
            disabled={true}
          >
            gray
          </Button>
          <Button
            variant="outlined"
            color="error"
            endIcon={<DeleteOutlineIcon />}
            onClick={() => {
              alert("Clicked delete button");
            }}
          >
            delete
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography>Lorem ipsum dolor sit amet.</Typography>
      </Box>

      <Typography variant="h4">Mui Buttons</Typography>
    </Box>
  );
};

export default App1;
