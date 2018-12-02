const _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (typeof end == 'undefined'){
      end = start;
      start = 0;
      return true;
    } 
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
    } 
		if ((start <= number) && (number <= end)){
      isInRange = true;
      return isInRange;
    } else {
      return false;
    }
  },
  words(string){
    words = string.split(' ');
    return words;
  },
  pad(string, length){
    if (length <= string.length){
      return string;
    }
    startPaddingLength = Math.floor((length - string.length)/2);
    endPaddingLength = length - string.length - startPaddingLength;
    paddedString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key){
    if (object.hasOwnProperty(key)){
      hasValue = true;
    }
    else {
      hasValue = false;
    }
	  return hasValue;
  },
  invert(object){
    invertedObject  = {};
    for (let i in object) {
      if(object.hasOwnProperty(i)) {
          invertedObject[object[i]] = i;
      }
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for (let i in object){
      let value = object[i];
      predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return i;
      }
    }
    return undefined
  },
  drop(array, n){
    if (n == undefined){
      n = 1;
    }
    droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate){
    dropNumber = array.findIndex(function (element, index){
      returnValue = predicate(element, index, array);
      return !returnValue;
    });
    droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size){
    if (size == undefined){
      size = 1;
    }
    arrayChunks = [];
    for (i = 0; i < array.length; i += size){
      arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;