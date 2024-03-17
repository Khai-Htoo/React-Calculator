import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  const handleButton = (value) => {
    switch (value) {
      case "C":
        setOutput(0), setInput(0);
        break;
      case "AC":
        setInput(input.slice(0, input.length - 1));
        break;
      case "=":
        try {
          setOutput(eval(input));
        } catch (error) {
          setOutput(error.message);
        }
        break;
      default:
        input == 0 ? setInput(value) : setInput(input + value);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center ">
        <div className=" sm:w-[370px] md:w-[600px] bg-blue-950">
          <Output output={output} />
          <Input input={input} />
          <Button handleButton={handleButton} />
        </div>
      </div>
    </>
  );
};

export default App;
