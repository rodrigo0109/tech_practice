function HasBalancedBrackets(string) {
  // Your code here:
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")"
  }

  let openBrackets = []

  for (let i = 0; i < string.length; i++) {

    if (validBrackets[string[i]]) {
      openBrackets.push(string[i])
      console.log(openBrackets)
    }
    else if (validBrackets[openBrackets.pop()] !== string[i]) {
      return false
    }

  }

  return !openBrackets.length
}

module.exports = HasBalancedBrackets
