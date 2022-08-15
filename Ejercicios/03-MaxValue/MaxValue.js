function MaxValue(shares) {
  // Your code here:
  let max = shares[1] - shares[0];
  let minPrice = shares[0];
  for (let i = 1; i < shares.length; i += 1) {
    const potencial = shares[i] - minPrice;   
    max = Math.max(max, potencial); 
    minPrice = Math.min(minPrice, shares[i]);
  }
  return max;
}

module.exports = MaxValue
