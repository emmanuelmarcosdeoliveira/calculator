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
            ÷
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="h-16 w-16">7</Button>
          <Button className="h-16 w-16">8</Button>
          <Button className="h-16 w-16">9</Button>
          <Button variant="primary" className="h-16 w-16">
            x
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="h-16 w-16">4</Button>
          <Button className="h-16 w-16">5</Button>
          <Button className="h-16 w-16">6</Button>
          <Button variant="primary" className="flex h-16 justify-center w-16">
            {" "}
            <span className="bg-(--text) h-0.5 inline-block w-3"></span>
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="h-16 w-16">1</Button>
          <Button className="h-16 w-16">2</Button>
          <Button className="h-16 w-16">3</Button>
          <Button variant="primary" className="h-16 w-16">
            +
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="flex-1 h-16 w-16">0</Button>
          <Button className="h-16 w-16">,</Button>

          <Button variant="primary" className="bg-purple-600/90 h-16 w-16">
            =
          </Button>
        </div>
      </div>
    </Container>
  );
}
