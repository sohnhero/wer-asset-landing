import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  className?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  options = [],
  rows = 3,
  value,
  onChange,
  className = "",
}: FormFieldProps) {
  const baseInputStyles =
    "w-full rounded-xl border border-brand-line bg-brand-bg/50 px-3.5 py-2.5 text-xs md:text-sm text-brand-ink outline-none transition-all duration-200 placeholder:text-brand-muted/60 focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="text-[11px] font-bold tracking-tight text-brand-muted"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseInputStyles} resize-y`}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseInputStyles} cursor-pointer`}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
        />
      )}
    </div>
  );
}
