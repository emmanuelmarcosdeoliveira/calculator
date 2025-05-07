import { Button } from "./Button";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Container } from "./Container";

export function Calculator() {
  return (
    <Container className="flex flex-col gap-[1.625rem] pb-8 pt-14 px-8 w-[22.25rem]">
      <CalculatorDisplay operation="1+1" result="2" />
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button className="h-16 w-16">CE</Button>
          <Button className="flex-1 h-16">C</Button>
          <Button variant="primary" className="h-16 w-16">
            /
          </Button>
        </div>
      </div>
    </Container>
  );
}
