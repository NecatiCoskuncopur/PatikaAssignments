const arguments = process.argv.slice(2)[0] * 1;

function circleArea(radius) {
  let circleArea = Math.PI.toFixed(2) * Math.pow(radius, 2);
  console.log("Yarıçapı", radius, "olan dairenin alanı:", circleArea);
}

circleArea(arguments);
