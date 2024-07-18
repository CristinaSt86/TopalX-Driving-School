import React from "react";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, label, value, onChange }) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block text-gray-700 text-lg font-bold mb-2 bg-white w-fit p-1 rounded-tr-2xl rounded-tl-2xl"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows={3}
      value={value}
      onChange={onChange}
      required
      className="appearance-none rounded-tl-2xl rounded-tr-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

export default TextAreaField;
