import { Container } from "./Container";
import { Text } from "./Text";

export function OperationHistory() {
  return (
    <Container className="h-[37.rem] px-8 py-10 w-[22.25rem]">
      <Text className="mb-4" variant="heading" as="h1">
        Histórico de Operações
      </Text>
      <ul className="flex flex-col g">
        <div className="flex flex-col gap-3 h-[28.125rem] overflow-y-auto text-red-300">
          <Text as="li">1 + 1 = 2</Text>
          <Text as="li">2 + 3 + 1 = 6</Text>
          <Text as="li">2 + 3 = 5</Text>
        </div>
      </ul>
    </Container>
  );
}
