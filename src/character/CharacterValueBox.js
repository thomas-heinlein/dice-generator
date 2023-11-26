import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import React from "react";

const CharacterValueBox = ({ boxItems }) => {
  const mapItem = (item, index) => (
    <Box key={boxItems.title + "-" + index}>
      <Typography>
        {item.description
          ? printItemWithDescription(item)
          : printItemWithoutDescription(item)}
      </Typography>
    </Box>
  );

  const printItemWithDescription = (item) => (
    <>
      {item.description}: {item.value}
    </>
  );

  const printItemWithoutDescription = (item) => <>{item.value}</>;

  const printItems = () => {
    return boxItems.items.map((item, index) => mapItem(item, index));
  };

  return (
    <Box justifyContent="space-between" p={2}>
      <Typography variant="h5">{boxItems.title}</Typography>
      <Divider />
      {printItems()}
    </Box>
  );
};
export default CharacterValueBox;
