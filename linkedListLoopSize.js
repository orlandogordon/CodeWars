// My List
class Node {
  constructor(data = 5, next = null) {
    this.data = data;
    this.next = next;
  }
  setNext(node) {
    this.next = node;
  }
  getNext() {
    return this.next;
  }
}

function loop_size(node) {
  let node2 = node.next;
  let loopSize = 1;

  while (node !== node2) {
    if (node.next === null) return 0;
    node = node.next;
    node2 = node2.next.next;
  }
  node2 = node2.next;
  while (node !== node2) {
    node2 = node2.next;
    loopSize++;
  }

  return loopSize;
}

const A = new Node(),
  B = new Node(),
  C = new Node();
A.setNext(B), B.setNext(C), C.setNext(A);
console.log(loop_size(A), 3);

const D = new Node(),
  E = new Node(),
  F = new Node();
D.setNext(E), E.setNext(F), F.setNext(E);
console.log(loop_size(D), 2);

// Best Practice
function loop_size2(node) {
  var turtle = node;
  var rabbit = node;

  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // voila
  return count;
}
