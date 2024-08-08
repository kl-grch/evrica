import "./button.scss";

interface ButtonProps {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => any;
}

export default function Button({
  disabled,
  onClick,
  tabIndex,
  onKeyDown,
}: ButtonProps) {
  let isKeyDownHandled = false;
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={(e) => {
        if (!isKeyDownHandled) {
          onClick?.(e);
        }
      }}
      tabIndex={tabIndex}
      onKeyDown={(e) => {
        if (isKeyDownHandled) {
          isKeyDownHandled = true;
          onKeyDown?.(e);
        }
      }}
    >
      Добавить
    </button>
  );
}
