const readFile = require("../utils/readFile");

const day02 = () => {
  const input = readFile(__dirname).split("\n");

  const calculateDepthandPosition = (input) => {
    let coordinates = {
      position: 0,
      depth: 0,
    };

    input.forEach((step) => {
      const splitStep = step.split(" ");
      coordinates = incrementValue(splitStep, coordinates);
    });

    console.log(coordinates);
    console.log(coordinates.depth * coordinates.position);
  };

  calculateDepthandPositionWithAim = (input) => {
    let coordinates = {
      position: 0,
      depth: 0,
      aim: 0,
    };
    input.forEach((step) => {
      const splitStep = step.split(" ");
      coordinates = incrementValueWithAim(splitStep, coordinates);
    });
    console.log(coordinates);
    console.log(coordinates.depth * coordinates.position);
  };

  const incrementValue = (splitStep, coordinates) => {
    if (splitStep[0] === "forward") {
      let position = coordinates.position;
      position = position + parseInt(splitStep[1]);
      coordinates.position = position;
    } else {
      if (splitStep[0] === "down") {
        let depth = coordinates.depth;
        depth = depth + parseInt(splitStep[1]);
        coordinates.depth = depth;
      } else {
        let depth = coordinates.depth;
        depth = depth - parseInt(splitStep[1]);
        if (depth < 0) depth = 0;
        coordinates.depth = depth;
      }
    }

    return coordinates;
  };

  const incrementValueWithAim = (splitStep, coordinates) => {
    if (splitStep[0] === "forward") {
      let position = coordinates.position;
      position = position + parseInt(splitStep[1]);
      coordinates.position = position;

      let depth = coordinates.depth;
      depth = depth + parseInt(splitStep[1]) * coordinates.aim;
      coordinates.depth = depth;
    } else {
      if (splitStep[0] === "down") {
        let aim = coordinates.aim;
        aim = aim + parseInt(splitStep[1]);
        coordinates.aim = aim;
      } else {
        let aim = coordinates.aim;
        aim = aim - parseInt(splitStep[1]);
        if (aim < 0) aim = 0;
        coordinates.aim = aim;
      }
    }

    return coordinates;
  };

  calculateDepthandPosition(input);
  calculateDepthandPositionWithAim(input);
};

module.exports = day02;
