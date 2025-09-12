"use client";

import FormLegalResponsive from "@/container/FormLegal/Responsive/FormLegalResponsive";
import NotifikasiWeb from "@/container/Notifikasi/Web/NotifikasiWeb";

import useDevice from "@/hooks/use-device";

const Page = () => {
  const { isMobile, mounted } = useDevice();

  if (!mounted) return null;

  if (isMobile) {
    return <FormLegalResponsive type="default" />;
  }

  return <NotifikasiWeb />;
};

export default Page;
