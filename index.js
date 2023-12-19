const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber);

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());

function findElementByClass(root, className) {
  if (root.classList.contains(className)) {
    return root;
  }

  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i];
    const foundElement = findElementByClass(child, className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
