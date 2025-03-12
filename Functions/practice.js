// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;
// }

// let result = makeTea("greenTea");
// console.log(result);

function orderTea(teaType) {
  function confirmedOrder() {
    return `Order confirmed for chai`;
  }
  return confirmedOrder();
}

// let result1 = orderTea("lemonTea");
// console.log(result1);

const calaculateTotal = (price, quantity) => {
  return price * quantity;
};
// console.log(calaculateTotal(10, 20));

//conept of Higher Order Function:
function makeTea(typeOfTea) {
  return `make tea : ${typeOfTea}`;
}

function processTeaOrder(TeaFunction) {
  return TeaFunction("early Grey");
}

let result = processTeaOrder(makeTea);
// console.log(result);

function createTeaMaker() {
  return function (teaType) {
    return `making : ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("greenTea"));
