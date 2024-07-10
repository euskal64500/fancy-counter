import { ResetIcon } from "@radix-ui/react-icons";

type TProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function ResetButton({ setCount }: TProps) {
  const handleClick = () => {
    setCount(0);
  };

  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
