import { useState } from "react";

import { cn } from "@/lib/utils";

const InputText = ({
  label,
  isRequired = false,
  placeholder = "Masukkan teks",
  value = "",
  onChange = () => {},
  errorMessage = "",
  maxLength = 100,
  className = "",
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Clear error when user starts typing
    if (error) {
      setError("");
    }

    // Check if required field is empty
    if (isRequired && inputValue.trim() === "") {
      setError(`${label} wajib diisi`);
    }

    // Check max length
    if (maxLength && inputValue.length > maxLength) {
      return; // Prevent typing beyond max length
    }

    onChange(inputValue);
  };

  // Use custom error message if provided, otherwise use dynamic one
  const displayError = errorMessage || error;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Label */}
      <label className="text-sm font-semibold text-neutral-900 md:text-xs md:font-medium">
        {label}
        {isRequired ? (
          <span className="text-neutral-900">*</span>
        ) : (
          <span className="text-xxs"> (Opsional)</span>
        )}
      </label>

      {/* Text Input */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm font-semibold",
            displayError
              ? "border-error-400"
              : "border-neutral-600 focus:border-primary-700",
            "bg-neutral-50 focus:outline-none"
          )}
        />
      </div>

      {/* Error Message */}
      {displayError && (
        <span className="text-xs font-medium text-error-400">
          {displayError}
        </span>
      )}
    </div>
  );
};

export default InputText;
