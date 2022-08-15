function Node(value) {
  // Your code here:
  this.value = value
  this.next = null
}

function MinStack() {
  // Your code here:
  this.top = null
}

MinStack.prototype.push = function (value) {
  const previousTop = this.top

  const nodo = new Node(value)
  this.top = nodo
  this.top.next = previousTop

  if(!previousTop) this.top.min = value
  else if(value < previousTop.min){this.top.min = value}
  else {
    this.top.min = previousTop.min
  }
}

MinStack.prototype.pop = function () {
  const nodo = this.top
  this.top = this.top.next
  return nodo.value
}

MinStack.prototype.peek = function () { 
  return this.top.value
}

MinStack.prototype.min = function () {
  return this.top.min
}

const nodo = new Node(4)
console.log(nodo)

module.exports = {
  Node,
  MinStack
}
