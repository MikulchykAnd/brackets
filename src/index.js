module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i=0;i<str.length;i++){
    let currentS = str[i];
    let topEl = stack[stack.length - 1];
    for (let j=0;j<bracketsConfig.length;j++){
      let currentConfig = bracketsConfig[j];
      if (currentConfig.includes(currentS)){
        currentS == currentConfig[1]?
        (topEl == currentConfig[0] ? stack.pop() : stack.push(currentS)):
        stack.push(currentS);
      }
    }
  }
  return stack.length ===0;
  // your solution
}
