const randomGenerator = (char) => {
  const characters = char;
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { randomGenerator };
