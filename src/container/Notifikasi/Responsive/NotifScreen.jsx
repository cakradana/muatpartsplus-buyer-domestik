import { useRouter } from "next/navigation";
import { useState } from "react";

import { useShallowMemo } from "@/hooks/use-shallow-memo";

import SearchBarResponsiveLayout from "@/layout/ResponsiveLayout/SearchBarResponsiveLayout";
import { useWaitingSettlementModalAction } from "@/store/Shipper/forms/waitingSettlementModalStore";

import PeriodDropdown from "./PeriodDropdown";

const NotifScreen = ({
  type,
  queryParams,
  onChangeQueryParams,
  orders,
  settlementAlertInfo,
  lastFilterField,
}) => {
  const [isPeriodBottomsheetOpen, setPeriodBottomsheetOpen] = useState(false);

  const router = useRouter();
  const { setIsOpen } = useWaitingSettlementModalAction();
  const isDefaultPage = type === "default";
  const alertTitles = {
    needConfirmation: "Terdapat pesanan yang membutuhkan konfirmasi",
    waitingPayment: "Terdapat pesanan yang menunggu pembayaran",
    waitingRepayment: "Terdapat pesanan yang menunggu pelunasan",
  };

  const alertItems = useShallowMemo(() => {
    if (!settlementAlertInfo) return [];

    const listPesananUrl = [
      "/daftarpesanan/pesananmenunggupembayaran",
      "/daftarpesanan/pesananmenunggupelunasan",
      "/daftarpesanan/butuhkonfirmasianda",
      "/daftarpesanan/butuhkonfirmasianda",
    ];

    return settlementAlertInfo
      .map((item, key) => {
        if (!item.orderId || item.orderId.length === 0) {
          return null;
        }
        if (key === 1) {
          return {
            label: item.alertText,
            onClick: () => setIsOpen(true),
          };
        }
        return {
          label: item.alertText,
          onClick: () =>
            router.push(
              item.orderId.length === 1
                ? `/daftarpesanan/detailpesanan/${item.orderId[0]}`
                : listPesananUrl[key]
            ),
        };
      })
      .filter(Boolean);
  }, [settlementAlertInfo, router, setIsOpen]);

  const periodOptions = [
    {
      name: `EksekusiTenderIndexSemuaPeriode (Default)`,
      value: "",
      format: "day",
    },
    {
      name: "AppMuatpartsAnalisaProdukHariIni",
      value: 0,
      format: "day",
    },
    {
      name: "AppMuatpartsAnalisaProduk1MingguTerakhir",
      value: 7,
      format: "day",
    },
    {
      name: "AppMuatpartsAnalisaProduk30HariTerakhir",
      value: 30,
      format: "month",
    },
    {
      name: "AppMuatpartsAnalisaProduk90HariTerakhir",
      value: 90,
      format: "month",
    },
    {
      name: "AppMuatpartsAnalisaProduk1TahunTerakhir",
      value: 365,
      format: "year",
    },
  ];

  const handleChangePeriod = ({ startDate, endDate, value }) => {
    if (value === "custom") {
      onChangeQueryParams("startDate", startDate);
      onChangeQueryParams("endDate", endDate);
    } else if (value === "") {
      onChangeQueryParams("startDate", null);
      onChangeQueryParams("endDate", null);
    } else {
      // Get local dates using direct component extraction, not toISOString()
      const getLocalDateString = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      // Get today as end date
      const today = new Date();
      const endDate = getLocalDateString(today);

      // Calculate start date
      let startDate;
      if (value === 0) {
        // Today
        startDate = endDate;
      } else {
        // Other periods (7 days, 30 days, etc.)
        const startDateObj = new Date();
        // Set to noon to avoid any date boundary issues
        startDateObj.setHours(12, 0, 0, 0);
        startDateObj.setDate(today.getDate() - value);
        startDate = getLocalDateString(startDateObj);
      }

      onChangeQueryParams("startDate", startDate);
      onChangeQueryParams("endDate", endDate);
    }
  };

  return (
    <SearchBarResponsiveLayout
      withMenu={
        isDefaultPage
          ? {
              onClickPeriod: () => setPeriodBottomsheetOpen(true),
              periodSelected: queryParams.startDate && queryParams.endDate,
            }
          : null
      }
      onEnterPress={(value) => onChangeQueryParams("search", value)}
      placeholder={"Cari Nama Produk / SKU"}
      shouldResetSearchValue={false}
    >
      <div className="p-4">
        <div className="flex h-16 items-center gap-3 rounded-lg border border-[#C4C4C4] px-3 py-4">
          <img src="/icons/star-plus.svg" alt="" />
          <div className="flex w-full justify-between">
            <div className="w-1/2 text-xs font-medium text-neutral-600">
              <span className="text-base font-bold text-muat-parts-member-900">
                4,9
              </span>
              /5
              <div className="text-xs font-medium text-neutral-900">
                Penilaian Toko
              </div>
            </div>
            <div className="flex w-1/2 justify-end border-l border-[#C4C4C4] text-xs font-medium text-neutral-600">
              <div className="w-fit">
                <span className="text-base font-bold text-muat-parts-member-900">
                  3,000
                </span>

                <div className="text-xs font-medium text-neutral-900">
                  Ulasan Diberikan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PeriodDropdown
        isOpen={isPeriodBottomsheetOpen}
        setIsOpen={setPeriodBottomsheetOpen}
        options={periodOptions}
        onChange={handleChangePeriod}
      />
    </SearchBarResponsiveLayout>
  );
};

export default NotifScreen;
