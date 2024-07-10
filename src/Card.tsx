import { useState } from "react";
import Counter from "./Counter";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} blocked={count === 0} />
        <CountButton type="add" setCount={setCount} blocked={count === 5} />
      </ButtonContainer>
    </div>
  );
}
