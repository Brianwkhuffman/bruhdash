var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.unshift();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, x) {
    return arr.indexOf(x);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, x) {
    return arr.lastIndexOf(x);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    let x = arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let x = []
    for (let i=0;i<arr.length;i++){
      if (arr[i]){ //checking the "base value" of arr[i] itself
        x.push(arr[i]) //pushes the truthy values to x
      }
    }
    return x;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, x, y) {
    return arr.slice(x, y);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (typeof n === 'undefined'){
      arr.shift();
    }else{
      for (let i=0;i<n;i++){
        arr.shift()
      }
    }
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (typeof n === 'undefined'){
      arr.pop();
    }else{
      for (let i=0;i<n;i++){
        arr.pop();
      }
    }
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (typeof n === 'number'){
      return arr.slice(0, n);
    }else if (typeof n === 'undefined'){
      return arr.slice(0, 1);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(n === undefined){
      var last = [arr[arr.length-1]]
      return last
    } else if(n === 0){
      var empty = [];
      return empty;
    } else{
      arr = arr.slice(arr.length-n, arr.length);
      return arr;
    }
      
 },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
    if (start && end){ //checks if start and end are defined(truthy/falsy)
      for (let i=start;i<end;i++){
        arr[i] = val;
      }
    }else{
    for (let i=0;i<arr.length;i++){
      arr[i] = val;
    }
  }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, x, y) {
    let empty = []
    for (let i=0;i<arr.length;i++){
      if (arr[i] !== x  && arr[i] !== y){
        empty.push(arr[i]);
      }
    }
    return empty;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, x) {
    let empty = [];  
  for (let i=0;i<arr.length;i++){
      if (arr[i] !== x[0] && arr[i] !== x[1])
        empty.push(arr[i]);
    }
  var newarr = empty.slice(0, 2)
  return newarr;
},

  // creates an array excluding all the specified values
  without: function(arr, x, y) {
    for (let i=0;i<arr.length;i++){
      if (arr[i] === x || arr[i] === y){
        arr.splice(i, 1)
        i--;
      }
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function(arr, arr2) {
    let x = [];
    for (let i=0;i<arr.length;i++){
      if (arr[i] !== arr2[i]){
        x.push(arr[i]);
      }
    }
    return x;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr, arr2) {
    let x = [];
    for (let i=0;i<arr.length;i++){
     let newarr = [arr[i], arr2[i]];
     x.push(newarr);
    }
    return x;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    let x = [];
    let y = [];
    for (let i=0;i<arr.length;i++){
      x.push(arr[i][0]);
      y.push(arr[i][1]);
    }
    let newarr = [x, y];
    return newarr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    let empty = [];
    let numChunk = Math.ceil(arr.length/size);
    if (arr && size){
      for (let i=0;i<numChunk;i++){
        empty.push(arr.splice(0, size));
      }
      return empty;
    }else if (size === 0){
      return empty;
    }else if (size >= arr.length){
      return arr;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
