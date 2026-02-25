import { cn } from "@/lib/utils";
import { InputFieldType } from "@/types/type";

const InputField = ({
  value,
  onChange,
  type,
  name,
  className,
  label,
  placeholder,
  disabled,
  required,
}: InputFieldType) => {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        className={cn(
          "input disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100",
          className,
        )}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

export default InputField;
