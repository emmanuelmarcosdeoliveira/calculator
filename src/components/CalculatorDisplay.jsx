import { Text } from "./Text";

export function CalculatorDisplay({ result, operation }) {
  return (
    <div
      className={`flex 
      flex-col gap-6 px-[1.375rem] cursor-default select-none bg-white/10 rounded-xl p-1`}
    >
      <Text
        variant="muted"
        as="div"
        className={`flex items-center justify-end h-7`}
      >
        {" "}
        {result && operation}
      </Text>
      <div className={`flex items-center justify-between h-9`}>
        <Text variant="muted">=</Text>
        <Text className="font-extralight text-4xl" variant="blast">
          {result || operation}
        </Text>
      </div>
    </div>
  );
}
