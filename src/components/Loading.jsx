import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loading = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loading;
