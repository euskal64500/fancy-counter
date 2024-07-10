import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type TProps = {
  type: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  blocked: boolean;
};

export default function CountButton({ type, setCount, blocked }: TProps) {
  return (
    <button
      className="count-btn"
      disabled={blocked}
      onClick={() =>
        setCount((prev: number) => (type === "add" ? prev + 1 : prev - 1))
      }
    >
      {type === "add" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
