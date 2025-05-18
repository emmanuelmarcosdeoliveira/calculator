import { ButtonsCalc } from "../constants/contants";
import { Button } from "./Button";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Container } from "./Container";

export function Calculator() {
  return (
    <Container className="flex flex-col gap-[1.625rem] pb-8 pt-14 px-8 w-[22.25rem]">
      <CalculatorDisplay operation="1+1" result="2" />
      <div className="flex flex-col gap-3">
        {ButtonsCalc.map((row, index) => (
          <div key={index} className="flex gap-3">
            {row.map((button) => (
              <Button
                key={button.input}
                className={button.className || "h-16 w-16"}
                variant={button.variant}
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
