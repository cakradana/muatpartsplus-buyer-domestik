"use client";

import OpsiPengirimanResponsive from "@/container/OpsiPengiriman/Responsive/OpsiPengirimanResponsive";

import useDevice from "@/hooks/use-device";

const Page = () => {
  const { isMobile, mounted } = useDevice();

  if (!mounted) return null;

  if (isMobile) {
    return <OpsiPengirimanResponsive type="default" />;
  }

  return <OpsiPengirimanResponsive />;
};

export default Page;
