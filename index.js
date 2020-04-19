const token = (type, value) => ({
  type: type,
  value: value,
});


const tokenizer = (str) => {
  tokens = [];

  str.split("").forEach((element) => {
    if (isNaN(element)) {
      tokens.push(token("operator", element));
    } else if (element != " ") {
      tokens.push(token("integer", element));
    }
  });

  return tokens;
};

const interprete = (tokens) => {
  let pointer = 0;
  let expression = [];
  let acc = "";

  while (pointer < tokens.length) {

    if (tokens[pointer]["type"] != "operator" && pointer != tokens.length - 1) {
      acc += tokens[pointer]["value"];
    } else {

      if (acc == "") {
        expression.push(parseInt(tokens[pointer]["value"]));
        break;
      }

      acc = parseInt(acc);
      expression.push(acc);
      expression.push(tokens[pointer]["value"]);
      acc = "";
    }
    pointer++;
  }

  return eval(expression.join(''));

  
};

console.log(interprete(tokenizer("3 + 5 * 5")));
