import { useState } from "react";

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

import { cn } from "@/lib/utils";

const NotifikasiWeb = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    {
      key: "all",
      label: "Semua Notifikasi",
      value: "99+",
    },
    {
      key: "general",
      label: "Umum",
      value: "1",
    },
    {
      key: "muatparts-plus",
      label: "Muatparts PLUS",
      value: null,
    },
  ];

  const notifications = [0, 1, 2, 3, 4];

  return (
    <div className="mx-auto flex max-w-[1280px] gap-x-8 px-[72px] pb-[47px] pt-[34px]">
      <Card className="w-[341px] border-none p-3">
        {categories.map((category, key) => (
          <button
            className={cn(
              "flex h-[50px] w-full items-center justify-between px-6",
              selectedCategory === category.key
                ? "bg-muat-parts-member-50"
                : "bg-neutral-50"
            )}
            key={key}
            onClick={() => setSelectedCategory(category.key)}
          >
            <span
              className={cn(
                "text-sm font-bold leading-none",
                selectedCategory === category.key
                  ? "text-muat-parts-non-900"
                  : "text-[#868686]"
              )}
            >
              {category.label}
            </span>
            {category.value ? (
              <div className="flex size-6 items-center justify-center rounded-2xl bg-[#F71717] text-neutral-50">
                <span className="text-xxs font-semibold leading-none">
                  {category.value}
                </span>
              </div>
            ) : null}
          </button>
        ))}
      </Card>
      <Card className="border-none p-3">
        <div className="mb-6 flex items-center justify-between border-b border-b-[#EBEBEB] pb-6">
          <h1 className="text-base font-bold leading-none">Notifikasi</h1>
          <div className="flex items-center gap-x-3">
            <Button
              disabled={false}
              iconLeft="/icons/read16.svg"
              variant="muatparts-primary-secondary"
              onClick={() => {}}
            >
              Tandai Semua Telah Dibaca
            </Button>
          </div>
        </div>
        {notifications.map((notification, key) => (
          <button
            className={cn(
              "relative flex flex-col items-start gap-y-3 px-6 py-3",
              key < 3
                ? "border-l-2 border-l-muat-parts-member-900 bg-muat-parts-member-50"
                : "bg-neutral-50"
            )}
            key={key}
          >
            <h2 className="text-sm font-semibold leading-none">
              Menunggu Pembayaran!
            </h2>
            <p className="text-left text-xs font-medium leading-none text-[#868686]">
              Bayar Pesanan Paket Kuota Iklan KI-026 Anda sebesar Rp 22.700.500,
              sebelum 13 November 2120 14:38. Jika melebihi daripada tanggal dan
              jam yang ditentukan, maka pesanan yang Anda lakukan akan
              dibatalkan otomatis oleh sistem.
            </p>
            <span className="text-xs font-medium leading-none text-[#868686]">
              12 Des 2022 07:00 WIB
            </span>
          </button>
        ))}
      </Card>
    </div>
  );
};

export default NotifikasiWeb;
