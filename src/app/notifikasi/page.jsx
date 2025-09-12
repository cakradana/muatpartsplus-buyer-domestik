"use client";

import NotifikasiResponsive from "@/container/Notifikasi/Responsive/NotifikasiResponsive";
import NotifikasiWeb from "@/container/Notifikasi/Web/NotifikasiWeb";

import useDevice from "@/hooks/use-device";

const Page = () => {
  const { isMobile, mounted } = useDevice();

  if (!mounted) return null;

  if (isMobile) {
    return <NotifikasiResponsive type="default" />;
  }

  return <NotifikasiWeb />;
};

export default Page;
