const token = (type, value) => ({
  type: type,
  value: value,
});

const compare = (expectedType, type) => expectedType == type;

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
        expression.push(token("integer", parseInt(tokens[pointer]["value"])));
        break;
      }

      acc = parseInt(acc);
      expression.push(token("integer", acc));
      expression.push(token("operator", tokens[pointer]["value"]));
      acc = "";
    }
    pointer++;
  }

  pointer = 1;
  let result = expression[0]["value"];

  while (pointer < expression.length) {
    if (expression[pointer]["type"] == "operator") {
      if (compare(expression[pointer]["value"], "+")) {
        result += expression[pointer + 1]["value"];
      } else {
        result -= expression[pointer + 1]["value"];
      }
    }
    pointer++;
  }
  
  return result;
};

console.log(interprete(tokenizer("50 - 25 + 5")));
