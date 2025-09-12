import Button from "@/components/Button/Button";

import { useResponsiveNavigation } from "@/lib/responsive-navigation";

import FormResponsiveLayout from "@/layout/ResponsiveLayout/FormResponsiveLayout";

function BaseFormLegalScreen({ title, children, onSubmit }) {
  const navigate = useResponsiveNavigation();
  const companyName = "PT TRUK JAYA";

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
    // Handle form submission logic here
    navigate.push("/syarat-dan-ketentuan");
    console.log("Form submitted");
  };

  return (
    <FormResponsiveLayout
      title={title || "Kelengkapan Dokumen"}
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
          {children}
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

export default BaseFormLegalScreen;
