import { Text } from "./Text";

export function CalculatorDisplay({ result, operation }) {
  return (
    <div
      className={`flex 
      flex-col gap-8 px-[1.375rem] curor-default select-none`}
    >
      <Text
        variant="muted"
        as="div"
        className={`flex items-center justify-end`}
      >
        {" "}
        {operation}
      </Text>
      <div className={`flex items-center justify-between`}>
        <Text variant="muted">=</Text>
        <Text variant="blast">{result}</Text>
      </div>
    </div>
  );
}
