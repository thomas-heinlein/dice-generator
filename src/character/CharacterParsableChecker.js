const hasProperty = (object, property) =>
  object && typeof object === "object" && property in object;

const canMap = (object) => {
  return object && typeof object.map === "function";
};

const isParsableCharacter = (value) => {
  let valid = true;
  if (!canMap(value)) {
    console.error("Parsing error: initial value should be a map");
    valid = false;
  }

  value.forEach((titleWithItems) => {
    if (!hasProperty(titleWithItems, "title")) {
      console.error("Parsing error: title is missing", titleWithItems);
      valid = false;
    }
    if (!hasProperty(titleWithItems, "items")) {
      console.log("Parsing error: items is missing", titleWithItems);
      valid = false;
    }

    if (!canMap(titleWithItems.items)) {
      console.error("Parsing error: items should be a map", titleWithItems);
      valid = false;
    }

    titleWithItems.items.forEach((item) => {
      if (!hasProperty(item, "value")) {
        console.error("Parsing error: value is missing", item);
        valid = false;
      }
    });
  });
  return valid;
};

export default isParsableCharacter;
