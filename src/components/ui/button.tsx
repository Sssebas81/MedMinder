type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white p-3 rounded-xl"
    >
      {text}
    </button>
  );
}