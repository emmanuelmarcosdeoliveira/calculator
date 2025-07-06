import { useState } from "react";
import { buttonsCalc } from "../constants/constants";
import { Button } from "./Button";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Container } from "./Container";

export function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(input) {
    if (input === "C") {
      setOperation(""), setResult("");
      return;
    }
    if (input === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }

    if (input === "=") {
      const operationResult = eval(operation.replace(/,/g, "."));
      const parsResult = operationResult.toString()?.replace(/\./g, ",");
      setResult(parsResult);
      return;
    }
    if (result) {
      setOperation(isNaN(input) ? `${result}${input}` : input);
      setResult("");
      return;
    }

    if (input === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }
    setOperation(`${operation}${input}`);
  }

  return (
    <Container className="flex flex-col gap-[1.625rem] pb-8 pt-14 px-8 w-[22.25rem]">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        {buttonsCalc.map((row, index) => (
          <div key={`${row}--${index}`} className="flex gap-3">
            {row.map((button) => (
              <Button
                key={button.input}
                className={button.className || "h-16 w-16"}
                variant={button.variant}
                onClick={() => handleButtonClick(button.input)}
              >
                {button.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}
