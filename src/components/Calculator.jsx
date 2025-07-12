/** biome-ignore-all lint/suspicious/noArrayIndexKey: não obrigatório  */
import { Button } from "./Button";
import { useCalculator } from "../hooks/useCalculator";
import { buttonsCalc } from "../constants/constants";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Container } from "./Container";

export function Calculator() {
  const { operation, result, doOperation } = useCalculator();

  function handleButtonClick(input) {
    doOperation(input);
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
