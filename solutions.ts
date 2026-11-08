 
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



