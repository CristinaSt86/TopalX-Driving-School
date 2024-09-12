import React from "react";
import { useTranslation } from "react-i18next";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-lg font-bold mb-2">
        {label} {/* The label now contains the asterisk if required */}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
};

export default InputField;
