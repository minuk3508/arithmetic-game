const formulaGenerator = (a, b, c, d, e) => {
  const firstNum = Number(a + b);
  const secondNum = Number(c + d);
  const thirdNum = Number(d);

  if (e === "+") {
    return firstNum + secondNum;
  } else if (e === "-") {
    return firstNum - secondNum;
  } else if (e === "x") {
    return firstNum * thirdNum;
  }
};

export { formulaGenerator };
