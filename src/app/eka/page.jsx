"use client";

import { Button, toast } from "@muatmuat/ui";

import { useTranslation } from "@/hooks/use-translation";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Hello, world!</h1>
      <Button
        className="bg-blue-500 text-white"
        onClick={() => toast.success("Anjay!")}
      >
        {t("coba", {}, "halo gaes")}
      </Button>
    </div>
  );
}
