import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import React from "react";

const CharacterValueBox = ({ boxItems }) => {
  const hasValueProperty = (o) => o && typeof o === "object" && "value" in o;

  const printDescriptionAndValue = (descriptionWithValue) => {
    if (hasValueProperty(descriptionWithValue)) {
      return (
        <Typography>
          {descriptionWithValue.description}: {descriptionWithValue.value}
        </Typography>
      );
    }
    return <></>;
  };

  const isFunction = () => {
    return (
      boxItems && boxItems.items && typeof boxItems.items.map === "function"
    );
  };

  const mapItem = (item, index) => {
    return (
      <Box key={boxItems.title + "-" + index}>
        {printDescriptionAndValue(item)}
      </Box>
    );
  };

  const printItems = () => {
    if (isFunction()) {
      return boxItems.items.map((item, index) => mapItem(item, index));
    }
    return <>not parsable</>;
  };

  return (
    <Box justifyContent="space-between" width="250px" p={2}>
      <Typography variant="h5">{boxItems.title}</Typography>
      <Divider />
      {printItems()}
    </Box>
  );
};

export default CharacterValueBox;
