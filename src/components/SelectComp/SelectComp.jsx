import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectComp({ mode, setMode }) {
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select
        value='repulse'
        size="small"
        onChange={handleChange}
        style={{
          marginLeft: 10,
          backgroundColor: "#222",
          borderRadius: 5,

          color: "#633D8D"
        }}
      >
        <MenuItem value={"repulse"}>Repulse</MenuItem>
        <MenuItem value={"bubble"}>Bubble</MenuItem>
      </Select>
    </Box>
  );
}
