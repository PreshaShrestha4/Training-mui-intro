import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h3">{count}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        increase count
      </Button>

      <Button>decrease count</Button>
    </Box>
  );
};

export default App;
