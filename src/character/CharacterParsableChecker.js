const hasProperty = (object, property) =>
  object && typeof object === "object" && property in object;

const canMap = (object) => {
  return object && typeof object.map === "function";
};

const isParsableCharacter = (value, logging) => {
  let valid = true;

  if (!canMap(value)) {
    if (logging) {
      console.error("Parsing error: initial value should be a map");
    }
    valid = false;
    return valid;
  }

  value.forEach((titleWithItems) => {
    if (!hasProperty(titleWithItems, "title")) {
      if (logging) {
        console.error("Parsing error: title is missing", titleWithItems);
      }
      valid = false;
    }
    if (!hasProperty(titleWithItems, "items")) {
      if (logging) {
        console.log("Parsing error: items is missing", titleWithItems);
      }
      valid = false;
      return;
    }

    if (!canMap(titleWithItems.items)) {
      if (logging) {
        console.error("Parsing error: items should be a map", titleWithItems);
      }
      valid = false;
    }

    titleWithItems.items.forEach((item) => {
      if (!hasProperty(item, "value")) {
        if (logging) {
          console.error("Parsing error: value is missing", item);
        }
        valid = false;
      }
    });
  });
  return valid;
};

export default isParsableCharacter;
