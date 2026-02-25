import { cn } from "@/lib/utils";
import { InputFieldType } from "@/types/type";

const InputField = ({
  value,
  handleUserInfoChange,
  type,
  name,
  className,
  label,
  placeholder,
}: InputFieldType) => {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        className={cn("input", className)}
        id={name}
        name={name}
        value={value}
        onChange={handleUserInfoChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
