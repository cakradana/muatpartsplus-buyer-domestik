import { useState } from "react";

import InputFile from "./InputFile";
import InputText from "./InputText";

const InputBrand = ({
  sertifikatHaki = false,
  penunjukkanKeagenan = false,
  keteranganAsal = false,
  international = false,
  originCertificate = false,
}) => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "",
      brandOwnerCertificate: null,
      brandOwnerIssueDate: null,
      hakiCertificate: null,
      hakiIssueDate: null,
    },
  ]);

  const addBrand = () => {
    const newBrand = {
      id: Date.now(),
      name: "",
      brandOwnerCertificate: null,
      brandOwnerIssueDate: null,
      hakiCertificate: null,
      hakiIssueDate: null,
    };
    setBrands([...brands, newBrand]);
  };

  const removeBrand = (id) => {
    if (brands.length > 1) {
      setBrands(brands.filter((brand) => brand.id !== id));
    }
  };

  const updateBrand = (id, field, value) => {
    setBrands(
      brands.map((brand) =>
        brand.id === id ? { ...brand, [field]: value } : brand
      )
    );
  };

  // Format date for display (dd MMM yyyy)
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  // Custom date input component to maintain styling
  const CustomDateInput = ({ value, onChange, placeholder }) => {
    const displayValue = value ? formatDateForDisplay(value) : "";

    return (
      <div className="flex flex-col gap-y-1">
        <div className="relative">
          <div
            className={`flex h-8 w-full items-center justify-between gap-x-2 rounded-md border border-neutral-600 px-3 transition-colors ${
              !displayValue ? "hover:border-primary-700" : ""
            }`}
          >
            <span
              className={`flex-1 text-xs font-medium leading-[14.4px] ${displayValue ? "text-neutral-900" : "text-neutral-600"}`}
            >
              {displayValue || placeholder}
            </span>
            <img
              src="/icons/calendar16.svg"
              width={16}
              height={16}
              alt="Calendar"
            />
          </div>
          <input
            type="date"
            value={value ? new Date(value).toISOString().split("T")[0] : ""}
            onChange={(e) => {
              // Convert the date string to a Date object to maintain consistency with previous DatePicker
              const dateValue = e.target.value
                ? new Date(e.target.value)
                : null;
              onChange(dateValue);
            }}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-lg border border-neutral-600 p-4">
      {brands.map((brand, index) => (
        <div key={brand.id}>
          {index > 0 && <hr className="my-6 border-neutral-400" />}

          {/* Brand label and delete button in the same row with justify-between */}
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-neutral-900 md:text-xs md:font-medium">
              {international ? "Brand" : `Merek ${index + 1}`}
            </label>
            {/* Remove button - show for first brand only when there are at least 2 brands, always show for additional brands */}
            {(index > 0 || brands.length > 1) && (
              <button
                type="button"
                onClick={() => removeBrand(brand.id)}
                className="text-error-400"
                aria-label={international ? "Remove Brand" : "Hapus Merek"}
              >
                <img
                  src="/icons/form-legal/remove.svg"
                  alt="Remove"
                  width="20"
                  height="20"
                />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <InputText
              label={international ? "Brand" : "Merek"}
              isRequired
              placeholder={
                international ? "Enter Brand Name" : "Masukkan nama merek"
              }
              value={brand.name}
              onChange={(value) => updateBrand(brand.id, "name", value)}
            />

            <InputFile
              international
              label="Surat Pemegang Merek Dagang"
              isRequired
              value={brand.brandOwnerCertificate}
              onChange={(value) =>
                updateBrand(brand.id, "brandOwnerCertificate", value)
              }
            />

            <label>
              Registration Date<span>*</span>
            </label>
            <CustomDateInput
              placeholder={
                international
                  ? "Select Issuance Date"
                  : "Pilih tanggal diterbitkan"
              }
              value={brand.brandOwnerIssueDate}
              onChange={(date) =>
                updateBrand(brand.id, "brandOwnerIssueDate", date)
              }
            />

            {penunjukkanKeagenan && (
              <InputFile
                label="Surat Penunjukkan Keagenan"
                isRequired
                value={brand.brandOwnerCertificate}
                onChange={(value) =>
                  updateBrand(brand.id, "brandOwnerCertificate", value)
                }
              />
            )}

            {sertifikatHaki && (
              <>
                <InputFile
                  label="Sertifikat HAKI"
                  isRequired
                  value={brand.hakiCertificate}
                  onChange={(value) =>
                    updateBrand(brand.id, "hakiCertificate", value)
                  }
                />

                <CustomDateInput
                  placeholder={
                    international
                      ? "Select Issuance Date"
                      : "Pilih tanggal diterbitkan"
                  }
                  value={brand.hakiIssueDate}
                  onChange={(date) =>
                    updateBrand(brand.id, "hakiIssueDate", date)
                  }
                />
              </>
            )}

            {keteranganAsal && (
              <InputFile
                label="Sertifikat Keterangan Asal (COO)"
                isRequired
                value={brand.hakiCertificate}
                onChange={(value) =>
                  updateBrand(brand.id, "hakiCertificate", value)
                }
              />
            )}

            {originCertificate && (
              <InputFile
                international
                label="Origin Certificate"
                isRequired={false}
              />
            )}
          </div>
        </div>
      ))}
      <hr className="my-4 border-neutral-400" />

      {/* Add brand button at the bottom */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={addBrand}
          className="flex items-center gap-1 border-0 bg-transparent p-0 px-0 font-medium text-primary-700 no-underline hover:text-primary-800 md:h-[14px] md:px-0"
        >
          <img
            src="/icons/form-legal/add.svg"
            alt="Add"
            width="20"
            height="20"
          />
          <span>{international ? "Add Brand" : "Tambah Merek"}</span>
        </button>
      </div>
    </div>
  );
};

export default InputBrand;
