function FindNeedle (haystack, needle) {
  // Your code here:
  for (let i = 0; i < haystack.length; i++) {
    //console.log(haystack.slice(i,i + needle.length ))
    if(haystack.slice(i,i + needle.length) === needle) return i
  }
  return -1
}

module.exports = FindNeedle
