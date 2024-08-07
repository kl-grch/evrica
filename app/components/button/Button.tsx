import "./button.scss";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ disabled, onClick }: ButtonProps) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      Добавить
    </button>
  );
}
