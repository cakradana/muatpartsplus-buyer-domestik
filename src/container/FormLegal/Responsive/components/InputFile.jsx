import { useRef, useState } from "react";

// Import BottomSheet components
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTrigger,
} from "@/components/BottomSheet/BottomSheetUp";
import Button from "@/components/Button/Button";
import IconComponent from "@/components/IconComponent/IconComponent";

// Progress bar component
const ProgressBar = ({ progress }) => {
  return (
    <div className="relative h-1 w-full overflow-hidden rounded-full bg-neutral-200">
      <div
        className="absolute left-0 top-0 h-full bg-primary-700 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const InputFile = ({
  label,
  isRequired = false,
  buttonLabel,
  maxFileSize = 5, // in MB
  acceptedFormats = [".pdf", ".jpg", ".jpeg", ".png"],
  errorMessage, // Remove default error message
  value = null,
  onChange = () => {},
  // New props for upload progress
  isUploading = false,
  uploadProgress = 0,
  international = false,
}) => {
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [formatError, setFormatError] = useState(null);
  // State for bottom sheet visibility
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Format display for file types
  const displayFormats = acceptedFormats
    .map((format) => format.replace(".", "").toUpperCase())
    .join("/");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError(null);
    setFormatError(null);

    if (!file) {
      // If required and no file selected, show error
      if (isRequired) {
        setError(
          international ? `${label} is required` : `${label} wajib diisi`
        );
      }
      onChange(null);
      return;
    }

    // Validate file type
    const fileExtension = `.${file.name.split(".").pop().toLowerCase()}`;
    if (!acceptedFormats.includes(fileExtension)) {
      setFormatError(
        international
          ? "File format does not meet requirements"
          : "Format file tidak sesuai ketentuan"
      );
      onChange(null);
      return;
    }

    // Validate file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxFileSize) {
      setError(
        international
          ? `Maximum file size ${maxFileSize}MB`
          : `Ukuran file maksimal ${maxFileSize}MB`
      );
      onChange(null);
      return;
    }

    // If all validations pass
    onChange(file);
  };

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle bottom sheet upload button click
  const handleBottomSheetUploadClick = () => {
    setIsBottomSheetOpen(false);
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 300); // Delay to allow bottom sheet to close
  };

  // Handle file removal
  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onChange(null);
    setError(null);
    setFormatError(null);
  };

  // Determine if a file is currently selected
  const hasFile =
    value instanceof File || (typeof value === "string" && value.trim() !== "");

  // Get display name for the file
  const fileName =
    value instanceof File
      ? value.name
      : typeof value === "string" && value.trim() !== ""
        ? value.split("/").pop()
        : "";

  // Use custom error message if provided, otherwise use dynamic one
  const displayError = errorMessage || error;

  return (
    <div className="flex flex-col gap-3">
      {/* Label */}
      <label className="text-sm font-semibold text-neutral-900 md:text-xs md:font-medium">
        {label}
        {isRequired ? (
          <span className="text-neutral-900">*</span>
        ) : (
          <span className="text-xxs">
            {" "}
            {international ? "(Optional)" : "(Opsional)"}
          </span>
        )}
      </label>

      {/* File Input (Hidden) */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={acceptedFormats.join(",")}
        className="hidden"
        id="file-input"
      />

      {/* Progress bar - shown when uploading */}
      {isUploading && (
        <div className="mb-2">
          <ProgressBar progress={uploadProgress} />
        </div>
      )}

      {/* Upload Button or File Display */}
      {!isUploading && hasFile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <IconComponent
              src="/icons/form-legal/success.svg"
              className="h-4 w-4 text-success-400"
              width={16}
              height={16}
              alt={
                international
                  ? "File uploaded successfully"
                  : "File berhasil diunggah"
              }
            />
            <span className="text-md line-clamp-1 max-w-[200px] truncate break-all font-semibold text-success-400">
              {fileName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconComponent
              src="/icons/silang.svg"
              onClick={handleRemoveFile}
              className="h-4 w-4 cursor-pointer"
              width={16}
              height={16}
              alt={international ? "Remove file" : "Hapus file"}
            />
            <span
              className="cursor-pointer text-xs font-medium text-primary-700"
              onClick={handleButtonClick}
            >
              {international ? "Change File" : "Ubah File"}
            </span>
          </div>
        </div>
      ) : (
        // Only show the bottom sheet version (disable previous button)
        <BottomSheet
          open={isBottomSheetOpen}
          onOpenChange={setIsBottomSheetOpen}
        >
          <BottomSheetTrigger asChild>
            <Button
              type="button"
              variant="muatparts-primary"
              iconLeft={
                <IconComponent
                  src="/icons/form-legal/upload12.svg"
                  width={12}
                  height={12}
                  color="white"
                  className="stroke-[0.5]"
                />
              }
              onClick={() => setIsBottomSheetOpen(true)}
              className="text-md h-[30px] w-[119px] font-semibold"
            >
              {international ? "Upload" : buttonLabel || "Unggah"}
            </Button>
          </BottomSheetTrigger>
          <BottomSheetContent className="rounded-t-[24px]">
            <div className="flex flex-col items-center justify-center p-6">
              {/* Circular blue background with centered icon */}
              <div
                className="flex size-16 cursor-pointer items-center justify-center rounded-[50px] bg-primary-700"
                onClick={handleBottomSheetUploadClick}
              >
                <IconComponent
                  src="/icons/upload24.svg"
                  size="medium"
                  className="icon-fill-neutral-50"
                />
              </div>
              {/* Centered text below the circular button */}
              <p className="mt-4 text-center text-sm font-semibold text-neutral-900">
                {international ? "Upload File" : "Unggah File"}
              </p>
            </div>
          </BottomSheetContent>
        </BottomSheet>
      )}

      {/* File Info or Error Message */}
      {displayError ? (
        <span className="text-xs font-medium text-error-400">
          {displayError}
        </span>
      ) : !hasFile && !isUploading ? (
        <span className="text-xs text-neutral-600">
          {international
            ? `File format ${displayFormats} max. ${maxFileSize}MB`
            : `Format file ${displayFormats} maks. ${maxFileSize}MB`}
        </span>
      ) : null}
    </div>
  );
};

export default InputFile;
