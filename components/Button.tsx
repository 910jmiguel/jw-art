import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  onClick: () => void;
  label: string;
  icon?: IconDefinition;
  variant?: string;
};

const Button = ({ onClick, label, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between gap-3 rounded-full border bg-lightgray font-bold text-black whitespace-nowrap cursor-pointer p-3 text-lg pl-6"
    >
      {label}
      {icon && <FontAwesomeIcon icon={icon} className="h-8 pl-2" />}
    </button>
  );
};

export default Button;
