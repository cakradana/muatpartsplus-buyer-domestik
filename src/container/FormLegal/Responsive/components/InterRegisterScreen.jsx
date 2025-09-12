import Button from "@/components/Button/Button";

import { useResponsiveNavigation } from "@/lib/responsive-navigation";

import FormResponsiveLayout from "@/layout/ResponsiveLayout/FormResponsiveLayout";

import InputBrand from "./InputBrand";
import InputFile from "./InputFile";
import InputText from "./InputText";

function InterRegisterScreen() {
  const navigate = useResponsiveNavigation();
  const companyName = "PT TRUK JAYA";

  const handleSubmit = () => {
    // Handle form submission logic here
    navigate.push("/syarat-dan-ketentuan");
    console.log("Registration Document");
  };

  return (
    <FormResponsiveLayout
      title={"Registration Document"}
      className="text-sm font-semibold"
    >
      <div className="flex flex-col gap-y-3 pb-4">
        <h4>Company Name</h4>
        <p>{companyName}</p>
      </div>
      <hr className="border-neutral-400" />
      <div className="pb-20">
        <div className="mt-6 flex flex-col gap-y-6">
          <p>Business Legal Entity</p>
          <InterRegisterContent />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button
          variant="muatparts-primary"
          className="w-full"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </FormResponsiveLayout>
  );
}

function InterRegisterContent() {
  return (
    <>
      <InputFile
        international
        label={"Business License (USCI / USCC)*"}
        isRequired={true}
      />
      <InputFile
        international
        label={"Company Registration Certificate"}
        isRequired={true}
      />
      <InputFile international label={"VAT Certificate"} isRequired={true} />
      <InputFile
        international
        label={"Director Identity Card"}
        isRequired={true}
      />
      <InputText
        label={"Director ID Number"}
        isRequired={true}
        placeholder="16-digit ID Number"
      />
      <InputText
        international
        label={"Director ID Name"}
        isRequired={false}
        placeholder="Enter Name as Stated on ID"
      />
      <InputFile
        international
        label={"Director   Statement Letter"}
        isRequired={true}
      />
      <hr className="border-neutral-400" />
      <p>Exporter Legality</p>
      <InputBrand international originCertificate />
      <InputFile international label={"Product List"} />
    </>
  );
}

export default InterRegisterScreen;
