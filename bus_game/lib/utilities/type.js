export function isNatural(num) {
  if(isNaN(num)) return false;
  if(!Number.isInteger(num) || num < 0) return false;
}

export function makeNatural(num) {
  if(isNaN(num)) {
    const err = "provided argument is not a number, arg: ";
    var arg = ""; 
    try{
      arg = toString(num);
    }
    catch{
      throw new TypeError(err + "**ARG_UNPRINTABLE**")
    }
    throw new TypeError(err + arg);
  }
  
  return Math.floor(Math.abs(num));
}
