import Button from "@/components/Button/Button";
import IconComponent from "@/components/IconComponent/IconComponent";

// Added IconComponent import

import { useResponsiveNavigation } from "@/lib/responsive-navigation";

import PrimaryResponsiveLayout from "@/layout/ResponsiveLayout/PrimaryResponsiveLayout";

function SuccessRegisterScreen() {
  const navigate = useResponsiveNavigation();

  const handleGoToDashboard = () => {
    // Navigate to dashboard or home screen
    navigate.push("/");
  };

  return (
    <PrimaryResponsiveLayout
      className="px-[30px] text-sm font-semibold"
      onClickBackButton={undefined} // No back button
    >
      <div className="flex h-full flex-col items-center justify-center pt-16">
        <IconComponent
          src="/icons/success-register/success-register.svg"
          width={82}
          height={90}
          className="mb-6"
        />

        <h1 className="text-md mb-3 text-center font-bold text-white">
          Selamat! Pendaftaran Anda Berhasil!
        </h1>

        <p className="mb-8 text-center text-sm font-medium text-neutral-300">
          Kami akan segera memverifikasi persyaratan dokumen Anda. Apabila
          terdapat ketidaksesuaian atau informasi yang belum lengkap, tim
          muatmuat akan menghubungi Anda.
        </p>

        <div className="w-full">
          <Button
            variant="muatparts-warning"
            className="w-full"
            onClick={handleGoToDashboard}
          >
            Jelajahi Produk Menarik Lainnya
          </Button>
        </div>
      </div>
    </PrimaryResponsiveLayout>
  );
}

export default SuccessRegisterScreen;
