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
  checked,
}: InputFieldType) => {
  const isCheckbox = type === "checkbox";
  return (
    <div
      className={cn(
        isCheckbox ? "flex items-center gap-2" : "flex flex-col gap-1",
      )}
    >
      {!isCheckbox && <label htmlFor={name}>{label}:</label>}
      <input
        type={type}
        className={cn(
          isCheckbox
            ? "w-4 h-4 cursor-pointer"
            : "input disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100",
          className,
        )}
        id={name}
        name={name}
        {...(isCheckbox ? { checked } : { value })}
        onChange={onChange}
        placeholder={!isCheckbox ? placeholder : undefined}
        disabled={disabled}
        required={required}
      />
      {isCheckbox && (
        <label htmlFor={name} className="cursor-pointer">
          {label}:
        </label>
      )}
    </div>
  );
};

export default InputField;
