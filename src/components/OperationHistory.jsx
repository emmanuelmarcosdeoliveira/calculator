
import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Container } from "./Container";
import { Text } from "./Text";

export function OperationHistory() {
  const { history } = useContext(CalculatorContext);
  return (
    <Container className="h-[37.rem] px-8 py-10 w-[22.25rem]">
      <Text className="mb-4" variant="heading" as="h1">
        Histórico de Operações
      </Text>
      {history.length > 0 ? (
        <ul className="flex flex-col   gap-3 h-[28.125rem] overflow-y-auto text-red-300">
          {history.map((value) => (
            <Text key={value} as="li">
              {value}
            </Text>
          ))}
        </ul>
      ) : (
        <Text className="h-[28.125rem] text-center" as="p" variant="mini">
          Nenhuma operação realizada
        </Text>
      )}
    </Container>
  );
}
