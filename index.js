const revertStr = str => {
  if (!str) return;

  const arr = [...str];
  let revertedStr = ''
  for(let i = arr.length -1;i >= 0;i--) {
    revertedStr += arr[i];
  }

  return revertedStr;
}

const add = (a,b) => {
  return a + b;
}
