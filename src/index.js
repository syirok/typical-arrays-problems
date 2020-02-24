
exports.min = function min (array) {
  let mini = 0;
  for (let i in array) {
    if (array[i] < mini) {mini = array[i];}
  }
  return mini;
}

exports.max = function max (array) {
  let maxi = 0;
  for (let i in array) {
    if (array[i] > maxi) {maxi = array[i]}
  }
  return maxi;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (!Array.isArray(array)) {return 0;}
  else if (array.length == 0) {return 0;}
  else {
    for (let i in array) {
            sum += array[i];
        }
      return sum/array.length;
  }
    
  }