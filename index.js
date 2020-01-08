// Code your solution here
const findMatching = (arr, st) => {
  return arr.filter((n) => {
    return n.toLowerCase() === st.toLowerCase();
  });
}

const fuzzyMatch = (arr, st) => {
  return arr.filter(n => {
    return n.slice(0,st.length) === st
  })
}

const matchName = (arr, st) => {
  return arr.filter(n => {
    return n.name === st
  })
}
