const token = (type, value) => ({
    type: type,
    value: value,
  });
  
  const compare = (expectedType, type) => expectedType == type;
  
  const tokenizer = (str) => {
    tokens = [];
  
    str.split("").forEach((element) => {
      if (isNaN(element)) {
        tokens.push(token(typeof element, element));
      } else if (element != " ") {
        tokens.push(token("integer", parseInt(element)));
      }
    });
  
    return tokens;
  };
  
  const interprete = (tokens) => {
    //console.log(tokens);
  
    let pointer = 0;
    let left = "";
    let right = "";
    let token = tokens[pointer];
    let operator;
    //console.log(token);
  
    while (token["type"] == "integer") {
      left += token["value"];
      pointer++;
      token = tokens[pointer];
    }
  
    left = parseInt(left);
  
    operator = token["value"];
    tokens.splice(0, pointer + 1);
  
    //let right = parseInt(tokens.reduce((accum, value) => accum + value)["value"]);
    //let right = parseInt(tokens.join("")["value"]);
  
    tokens.forEach((element) => {
      right += element["value"];
    });
    right = parseInt(right);
  
    switch (operator) {
      case "+":
        return left + right;
  
      case "-":
        return left - right;
  
      case "/":
        return left / right;
  
      case "*":
        return left * right;
    }
  };
  
  //console.log(interprete(tokenizer("5 + 5")));
  console.log(interprete(tokenizer("101 + 155")));
  