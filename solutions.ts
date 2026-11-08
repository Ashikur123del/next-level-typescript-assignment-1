 
const multiplyValue = (value: number, multiplier = 2): number => {
  return value * multiplier;
};

const multiplyValueUser = multiplyValue(10, 2);

// console.log(multiplyValueUser)



const processInput = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};


// console.log(processInput(true))


const formatCoordinate = (coord: readonly [number, number, string]): string => {
  return `Location: ${coord[2]} (${coord[0]}, ${coord[1]})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

