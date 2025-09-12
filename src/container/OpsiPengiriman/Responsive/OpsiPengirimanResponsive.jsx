import Image from "next/image";
import { useState } from "react";

import Toggle from "@/components/Toggle/Toggle";

// Icon for the expand/collapse chevron
const ChevronIcon = ({ isExpanded }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transform text-neutral-500 transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Component to display the detailed information for GrabExpress
const GrabExpressDetails = () => (
  <div className="space-y-4 pt-4 text-xs leading-5 text-neutral-900">
    <p>
      GoSend Same Day adalah jasa kirim dari Gojek yang menyediakan layanan pick
      up dan pengiriman pada hari yang sama. GoSend Same Day mendukung
      pengiriman ke wilayah Jabodetabek, Surabaya, Bandung, Kota Tangerang
      Selatan, Kabupaten Sleman, Kota Yogyakarta, Kabupaten Sidoarjo, Kabupaten
      Gresik, Kota Semarang, Kabupaten Kendal, Kabupaten Demak, Kabupaten
      Semarang, Kabupaten Deli Serdang & Kota Medan.
    </p>
    <div>
      <p>Barang yang tidak boleh dikirim dengan GoSend Same Day:</p>
      <ol className="list-inside list-decimal">
        <li>
          Barang ilegal atau terlarang menurut hukum dan peraturan yang berlaku
        </li>
        <li>Obat-obatan terlarang dan narkotika</li>
        <li>Senjata asli atau tiruan termasuk senjata api atau bagiannya</li>
        <li>Bahan peledak dan amunisi</li>
        <li>Sisa-sisa manusia atau hewan, bagian tubuh atau organ</li>
        <li>Pengiriman tanpa kemasan yang tepat atau memadai</li>
        <li>Binatang/tumbuhan hidup</li>
        <li>Barang bernilai lebih dari Rp10 juta</li>
        <li>Logam mulia (selain emas) dan perhiasan</li>
        <li>Logam mulia emas dengan nilai lebih dari Rp4.5 juta</li>
      </ol>
    </div>
    <div className="space-y-1">
      <p>Jarak maks.: 40km</p>
      <p>Berat maks.: 5kg</p>
      <p>Dimensi maksimum: 40x40x40cm</p>
      <p>
        Kontak: 021-50941000 (Customer Service) atau customerservice@gojek.com
        (email)
      </p>
      <p>
        Situs:{" "}
        <a
          href="https://www.gojek.io/"
          className="text-primary-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.gojek.io/
        </a>
      </p>
      <p>Batasan</p>
      <p>Berat maks: 5000gr</p>
    </div>
  </div>
);

// The combined, collapsible component for each shipping option
const CollapsibleShippingOption = ({
  logo,
  name,
  isActive,
  onToggle,
  isExpanded,
  onExpand,
  width,
  height,
  children,
}) => (
  <div className="py-4">
    <div className="flex items-center justify-between">
      <div className="relative flex h-6 w-20 flex-shrink-0 items-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={width}
          height={height}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-neutral-900">{name}</span>
        <Toggle value={isActive} onClick={onToggle} />
        <button onClick={onExpand} aria-expanded={isExpanded}>
          <ChevronIcon isExpanded={isExpanded} />
        </button>
      </div>
    </div>
    {isExpanded && <div className="mt-2">{children}</div>}
  </div>
);

// The card-like section for grouping shipping options
const ShippingSection = ({ title, activeCount, description, children }) => (
  <div className="bg-white p-4">
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-base font-bold text-neutral-900">
          {title}{" "}
          {activeCount > 0 && (
            <span className="font-semibold text-primary-700">
              [{activeCount} Aktif]
            </span>
          )}
        </h2>
        {description && (
          <p className="mt-1 text-xs text-neutral-600">{description}</p>
        )}
      </div>
      <button>
        {/* Placeholder for the three-dots menu icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
            fill="#525252"
          />
        </svg>
      </button>
    </div>
    <div className="divide-y divide-neutral-200">{children}</div>
  </div>
);

// The main page component
const OpsiPengirimanPage = () => {
  const [courierStatus, setCourierStatus] = useState({
    gojek: false,
    grab: true, // Set to true to match screenshot
    jnt: true,
    jne: true,
    sicepat: true,
    anteraja: true,
    pos: true,
    jntCargo: true,
    jneTrucking: true,
    wahana: true,
  });

  // State to track which option is currently expanded
  const [expandedOption, setExpandedOption] = useState("grab");

  const toggleCourier = (courierName) => {
    setCourierStatus((prev) => ({
      ...prev,
      [courierName]: !prev[courierName],
    }));
  };

  // Toggles the expanded option
  const handleExpand = (courierName) => {
    setExpandedOption((prev) => (prev === courierName ? null : courierName));
  };

  const getActiveCount = (keys) => {
    return keys.filter((key) => courierStatus[key]).length;
  };

  return (
    <div className="font-inter min-h-screen bg-neutral-100">
      <header
        className="relative flex h-[60px] items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/img/background/bg-red-header.png')" }}
      >
        <button className="absolute left-4">
          {/* Back icon can be added here */}
        </button>
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold text-white">Opsi Pengiriman</h1>
        </div>
      </header>

      <main className="flex flex-col gap-4">
        <ShippingSection
          title="Instant"
          activeCount={getActiveCount(["gojek", "grab"])}
          description="Pengiriman di hari yang sama dengan durasi paling lama 6-8 jam sejak paket di kirim oleh kurir."
        >
          <CollapsibleShippingOption
            logo="/img/expedition/gojek.svg"
            name="Gojek Instant"
            isActive={courierStatus.gojek}
            onToggle={() => toggleCourier("gojek")}
            isExpanded={expandedOption === "gojek"}
            onExpand={() => handleExpand("gojek")}
            width={61}
            height={18}
          >
            {/* You can add Gojek's specific details here */}
            <p className="pt-4 text-xs text-neutral-600">
              Details for Gojek Instant can be added here.
            </p>
          </CollapsibleShippingOption>

          <CollapsibleShippingOption
            logo="/img/expedition/grab.svg"
            name="Grab Express Instant"
            isActive={courierStatus.grab}
            onToggle={() => toggleCourier("grab")}
            isExpanded={expandedOption === "grab"}
            onExpand={() => handleExpand("grab")}
            width={72}
            height={24}
          >
            <GrabExpressDetails />
          </CollapsibleShippingOption>
        </ShippingSection>

        <ShippingSection
          title="Reguler"
          activeCount={getActiveCount([
            "jnt",
            "jne",
            "sicepat",
            "anteraja",
            "pos",
          ])}
          description="Pengiriman standar dengan estimasi waktu 2-5 hari."
        >
          <CollapsibleShippingOption
            logo="/img/expedition/jnt.svg"
            name="J&T Express"
            isActive={courierStatus.jnt}
            onToggle={() => toggleCourier("jnt")}
            isExpanded={expandedOption === "jnt"}
            onExpand={() => handleExpand("jnt")}
            width={56}
            height={12}
          />
          <CollapsibleShippingOption
            logo="/img/expedition/jne.svg"
            name="JNE Express"
            isActive={courierStatus.jne}
            onToggle={() => toggleCourier("jne")}
            isExpanded={expandedOption === "jne"}
            onExpand={() => handleExpand("jne")}
            width={49}
            height={20}
          />
          {/* ... other regular couriers */}
        </ShippingSection>

        <ShippingSection
          title="Kargo"
          activeCount={getActiveCount(["jntCargo", "jneTrucking"])}
          description="Pengiriman besar dengan berat sampai dengan 600kg biaya lebih ekonomis."
        >
          <CollapsibleShippingOption
            logo="/img/expedition/jntcargo.svg"
            name="J&T Cargo"
            isActive={courierStatus.jntCargo}
            onToggle={() => toggleCourier("jntCargo")}
            isExpanded={expandedOption === "jntCargo"}
            onExpand={() => handleExpand("jntCargo")}
            width={60}
            height={14}
          />
          <CollapsibleShippingOption
            logo="/img/expedition/jtr.svg"
            name="JTR - JNE Trucking"
            isActive={courierStatus.jneTrucking}
            onToggle={() => toggleCourier("jneTrucking")}
            isExpanded={expandedOption === "jneTrucking"}
            onExpand={() => handleExpand("jneTrucking")}
            width={52}
            height={18}
          />
        </ShippingSection>

        <ShippingSection
          title="Lainnya"
          activeCount={getActiveCount(["wahana"])}
          description="Pilihan kurir lainnya."
        >
          <CollapsibleShippingOption
            logo="/img/expedition/wahana.svg"
            name="Wahana Express"
            isActive={courierStatus.wahana}
            onToggle={() => toggleCourier("wahana")}
            isExpanded={expandedOption === "wahana"}
            onExpand={() => handleExpand("wahana")}
            width={80}
            height={24}
          />
        </ShippingSection>
      </main>
    </div>
  );
};

export default OpsiPengirimanPage;
