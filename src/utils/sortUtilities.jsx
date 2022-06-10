const sort = (compare, elements) => {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true; // Assume that the array is in order

      for (
        let index = 0, length = elements.length - 1;
        index < length;
        index++
      ) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false; // The array wasn't in order, so swap elements and then check it again.
        }
      }
    } while (inOrder === false);
  }
  return elements;
};

export function sortItemsByNameAsc(items) {
  const compareName = (left, right) => {
    const leftName = left.name.toLowerCase();
    const rightName = right.name.toLowerCase();

    if (leftName !== rightName) {
      for (let i = 0; i < leftName.length; i++) {
        if (leftName.charCodeAt(i) !== rightName.charCodeAt(i)) {
          return leftName.charCodeAt(i) - rightName.charCodeAt(i);
        }
      }
      return 0;
    }
  };
  return sort(compareName, items);
}

export function sortItemsByNameDesc(items) {
  const compareName = (left, right) => {
    const leftName = left.name.toLowerCase();
    const rightName = right.name.toLowerCase();

    if (leftName !== rightName) {
      for (let i = 0; i < leftName.length; i++) {
        if (leftName.charCodeAt(i) !== rightName.charCodeAt(i)) {
          return rightName.charCodeAt(i) - leftName.charCodeAt(i);
        }
      }
      return 0;
    }
  };
  return sort(compareName, items);
}

export function sortItemsByEmployeesAsc(items) {
  const compareEmployees = (left, right) => {
    const leftEmployees = left.numberOfEmployees;
    const rightEmployees = right.numberOfEmployees;

    if (leftEmployees !== rightEmployees) {
      return leftEmployees - rightEmployees;
    }
    return 0;
  };

  return sort(compareEmployees, items);
}

export function sortItemsByEmployeesDesc(items) {
  const compareEmployees = (left, right) => {
    const leftEmployees = left.numberOfEmployees;
    const rightEmployees = right.numberOfEmployees;

    if (leftEmployees !== rightEmployees) {
      return rightEmployees - leftEmployees;
    }
    return 0;
  };
  return sort(compareEmployees, items);
}
