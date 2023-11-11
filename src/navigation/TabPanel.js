import React from "react";
import Box from "@mui/material/Box";

const TabPanel = ({ currentTab, index, children }) => {
  return (
    <Box role="tabpanel" hidden={currentTab !== index} id={`tabpanel-${index}`}>
      {children}
    </Box>
  );
};

export default TabPanel;
