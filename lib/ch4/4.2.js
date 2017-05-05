// Given a directed graph, design an algorithm to fnd out whether
// there is a route between two nodes.

function routeExists(n1, n2) {
  const seen = new Set();
  const queue = [];
  queue.push(n1);

  while (queue.length > 0) {
    const n0 = queue.shift();
    seen.add(n0);
    if (n0 === n2) return true;
    n0.children.forEach(c => {
      if (!seen.has(c)) queue.push(c);
    });
  }
  
  return false;
}
