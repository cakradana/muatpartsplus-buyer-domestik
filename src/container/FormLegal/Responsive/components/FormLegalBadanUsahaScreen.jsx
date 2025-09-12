import Button from "@/components/Button/Button";

import { useResponsiveNavigation } from "@/lib/responsive-navigation";

import FormResponsiveLayout from "@/layout/ResponsiveLayout/FormResponsiveLayout";

import InputFile from "./InputFile";
import InputText from "./InputText";

function FormLegalBadanUsahaScreen() {
  const navigate = useResponsiveNavigation();
  const companyName = "PT TRUK JAYA";

  const handleSubmit = () => {
    // Handle form submission logic here
    navigate.push("/syarat-dan-ketentuan");
    console.log("Form submitted");
  };

  return (
    <FormResponsiveLayout
      title={"Kelengkapan Dokumen"}
      className="text-sm font-semibold"
    >
      <div className="flex flex-col gap-y-3 pb-4">
        <h4>Nama Perusahaan</h4>
        <p>{companyName}</p>
      </div>
      <hr className="border-neutral-400" />
      <div className="pb-20">
        <div className="mt-6 flex flex-col gap-y-6">
          <p>Legalitas Badan Usaha</p>
          <FormLegalBadanUsahaContent />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button
          variant="muatparts-primary"
          className="w-full"
          onClick={handleSubmit}
        >
          Kirim
        </Button>
      </div>
    </FormResponsiveLayout>
  );
}

function FormLegalBadanUsahaContent() {
  return (
    <>
      <InputFile label={"NIB"} isRequired={true} />
      <InputFile label={"Akta Pendirian"} isRequired={true} />
      <InputFile label={"SK Kemenkumham"} />
      <InputFile label={"Akta Perubahan Terakhir"} />
      <InputFile label={"Akta Perubahan Terakhir"} />
      <InputFile label={"SK Kemenkumham Terakhir"} />
      <InputFile label={"KTP Direksi"} isRequired={true} />
      <InputText
        label={"No. KTP Pendaftar"}
        isRequired={true}
        placeholder="16 digit No. KTP Pendaftar"
      />
      <InputText
        label={"Nama KTP Pendaftar"}
        isRequired={true}
        placeholder="Masukkan Nama sesuai KTP"
      />
      <InputFile label={"Surat Pernyataan Direksi"} isRequired={true} />
    </>
  );
}

export default FormLegalBadanUsahaScreen;
