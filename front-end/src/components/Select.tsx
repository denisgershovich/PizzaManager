interface SelectProps {
  id: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  label,
  disabled,
}) => {
  return (
    <div className="flex items-center">
      {!!label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        {options.map((option) => (
          <option key={option} value={option} disabled={option === value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
