const readFile = require("../utils/readFile");

const day01 = () => {
  const input = readFile(__dirname)
    .split("\n")
    .map((value) => {
      return parseInt(value, 10);
    });

  const countIncreased = (input) => {
    const increasedValues = input
      .map((value, index) => {
        if (index > 0 && value > input[index - 1]) {
          return "increased";
        } else {
          return "decreased";
        }
      })
      .filter((status) => status === "increased");

    return increasedValues.length;
  };

  const countIncreasedThrees = (input) => {
    const parseToThrees = input
      .map((value, index) => {
        if (index < input.length - 2) {
          return value + input[index + 1] + input[index + 2];
        }
      })
      .filter((el) => el);

    return countIncreased(parseToThrees);
  };
  console.log(countIncreased(input));
  console.log(countIncreasedThrees(input));
};

module.exports = day01;
