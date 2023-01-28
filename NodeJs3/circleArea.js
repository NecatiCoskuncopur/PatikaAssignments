function circleArea(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2);
  console.log("Circle Area:", circleArea.toFixed(1));
}

function circleCircumference(radius) {
  let circleCircumference = Math.PI.toFixed(2) * radius * 2;
  console.log("Circle Circumference: ", circleCircumference.toFixed(1));
}

module.exports = {
  circleArea,
  circleCircumference,
};
