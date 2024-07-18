import React from "react";
import { Link } from "react-router-dom";

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  linkText: string;
  linkUrl: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ checked, onChange, label, linkText, linkUrl }) => (
  <div className="mb-4">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="consent"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
      <span className="ml-1 font-bold">
        <Link to={linkUrl} className="text-blue-500 underline font-bold">
          {linkText}
        </Link>
      </span>
      .
    </label>
  </div>
);

export default CheckboxField;
