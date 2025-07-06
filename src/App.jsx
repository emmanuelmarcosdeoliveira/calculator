import { Calculator } from "../src/components/Calculator";
import { OperationHistory } from "../src/components/OperationHistory";
function App() {
  return (
    <>
      <main
        className={`font-(--font) min-h-screen bg-linear-[180deg,_#807ece_0%,_#8e7ece_100%] items-center  flex gap-2  flex-col sm:flex-row  sm:justify-center p-8   text-(--text) `}
      >
        <Calculator />
        <OperationHistory />
      </main>
    </>
  );
}

export default App;
