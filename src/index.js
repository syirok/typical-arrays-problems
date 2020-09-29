
exports.min = function min (array) {
/*  let mini = 0;
  for (let i in array) {
    if (array[i] < mini) {mini = array[i];}
  }
  return mini;*/
  if (!Array.isArray(array)) return 0;
  return array.reduce((mini, el) => el < mini ? mini = el : mini, 0)
}

exports.max = function max (array) {
  /*let maxi = 0;
  for (let i in array) {
    if (array[i] > maxi) {maxi = array[i]}
  }
  return maxi;*/
  if (!Array.isArray(array)) return 0;
  return array.reduce((maxi, el) => el > maxi ? maxi = el : maxi, 0)
}

exports.avg = function avg (array) {
  /*let sum = 0;
  if (!Array.isArray(array)) {return 0;}
  else if (array.length == 0) {return 0;}
  else {
    for (let i in array) {
            sum += array[i];
        }
      return sum/array.length;
  }*/

  if (!Array.isArray(array) || array.length == 0) return 0;
  return array.reduce((sum, el) => sum + el, 0) / array.length;
    
  }