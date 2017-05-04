const AStack = require("./helpers/AStack.js");

class Hanoi {
  constructor(numDisks = 3) {
    this.numDisks = numDisks;

    this.initializeStacks();
  }

  initializeStacks() {
    this.stacks = [];
    for (let i = 0; i < 3; i++) {
      const stk = new AStack();
      if (i === 0) {
        for (let j = this.numDisks; j >= 1; j--) {
          stk.push(j);
        }
      }
      this.stacks.push(stk);
    }

    this.render();
  }

  render() {
    for (let j = this.numDisks - 1; j >= 0; j--) {
      let row = "";
      for (let i = 0; i < 3; i++) {
        const stk = this.stacks[i];
        const disk = stk.getEl(j);
        row += disk ? disk : " ";
      }
      console.log(row);
    }
  }

  move(source = this.stacks[0], target = this.stacks[2],
    aux = this.stacks[1], n = this.numDisks ) {
    if (n > 0) {
      this.move(source, aux, target, n - 1);
      target.push(source.pop());
      this.render();
      this.move(aux, target, source, n - 1);
    }
  }

}

// Test

const h = new Hanoi(5);
h.move();
