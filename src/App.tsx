import { useState } from "react";
import DarkMode from "@/components/_common/DarkMode";
import { Button } from "@/components/ui/button";
import "@/App.scss";

function App() {
  const [count, setCount] = useState(0);

  const helloHandler = () => {
    alert("Hello, World!");
  };

  return (
    <>
      <div>
        <button
          className="m-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <div className="m-2 flex justify-center items-center">
          <DarkMode />
        </div>
        <Button onClick={helloHandler}>Button</Button>
      </div>
    </>
  );
}

export default App;
