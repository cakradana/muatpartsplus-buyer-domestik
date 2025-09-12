"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp, Info, MoreVertical } from "lucide-react";

import { useGetOpsiPengiriman } from "@/services/opsi-pengiriman/getOpsiPengiriman";

import Toggle from "@/components/Toggle/Toggle";

const OpsiPengirimanWeb = () => {
  const { data: shippingOptions, error, isLoading } = useGetOpsiPengiriman();
  const [expandedDescriptions, setExpandedDescriptions] = useState({
    "grab-express-instant": true, // Show Grab Express description by default
  });

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading shipping options</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Opsi Pengiriman</h1>
          <div className="group relative">
            <Info className="h-5 w-5 cursor-help text-gray-400" />
            <div className="invisible absolute left-0 top-6 z-10 w-80 rounded-lg bg-gray-800 p-3 text-sm text-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              Atur pengiriman secara global untuk menjadi standar pengiriman di
              Merchant Anda.
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-6">
        {/* Iterate through all sections (Instant, Regular, Cargo, etc.) */}
        {shippingOptions?.sections?.map((section) => (
          <div key={section.id} className="rounded-xl bg-white shadow-muat">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    {section.title}{" "}
                    <span className="text-blue-600">
                      [{section.activeCount} Aktif]
                    </span>
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>
                <button className="rounded p-2 hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="divide-y">
              {section.items?.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                          item.provider === "Grab"
                            ? "bg-green-50"
                            : "bg-gray-100"
                        }`}
                      >
                        <span
                          className={`text-xs font-medium ${
                            item.provider === "Grab" ? "text-green-600" : ""
                          }`}
                        >
                          {item.provider || item.name.split(" ")[0]}
                        </span>
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Toggle value={item.enabled} type="primary" />
                      {item.description && (
                        <button
                          onClick={() => toggleDescription(item.id)}
                          className="rounded p-1 hover:bg-gray-100"
                        >
                          {expandedDescriptions[item.id] ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  {expandedDescriptions[item.id] && item.description && (
                    <div
                      className="prose prose-sm mt-4 max-w-none pl-16 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OpsiPengirimanWeb;
