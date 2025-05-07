import { Text } from "./Text";

export function CalculatorDisplay({ result, operation }) {
  return (
    <div
      className={`flex 
      flex-col gap-6 px-[1.375rem] curor-default select-none bg-white/10 rounded-xl p-1`}
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
        <Text className="font-extralight text-5xl" variant="blast">
          {result}
        </Text>
      </div>
    </div>
  );
}
