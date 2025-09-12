"use client";

import { useState } from "react";

// Test imports from @muatmuat/hooks - using actual exports
import { useDebounce, useDevice, usePrevious } from "@muatmuat/hooks";
// Test imports from @muatmuat/lib - using actual exports
import { cn, formatDate, idrFormat } from "@muatmuat/lib";
// Test basic imports from @muatmuat/ui
import { Button, Card, CardContent, CardHeader } from "@muatmuat/ui";

export default function TestPackagesPage() {
  const [count, setCount] = useState(0);

  // Test hooks from packages
  const debouncedCount = useDebounce(count, 500);
  const previousCount = usePrevious(count);
  const device = useDevice();

  return (
    <div className="container mx-auto space-y-8 p-8">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold">Package Test Page</h1>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Testing actual exports from packages submodule - Working Version
          </p>
        </CardContent>
      </Card>

      {/* UI Components Test */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">
            UI Components from @muatmuat/ui
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={() => setCount(count + 1)}>
              Click me ({count})
            </Button>

            <Button variant="muatparts-primary-secondary">
              Secondary Button
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hooks Test */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Hooks from @muatmuat/hooks</h2>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Counter: {count}</p>
          <p>Previous Counter: {previousCount ?? "none"}</p>
          <p>Debounced Counter (500ms): {debouncedCount}</p>
          <p>Device Type: {device?.type || "detecting..."}</p>
          <p>Is Mobile: {device?.isMobile ? "Yes" : "No"}</p>
        </CardContent>
      </Card>

      {/* Utils Test */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Utils from @muatmuat/lib</h2>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Formatted Currency: {idrFormat(1234567)}</p>
          <p>Formatted Date: {formatDate(new Date())}</p>
          <p className={cn("text-base", "font-bold", "text-blue-600")}>
            Text styled with cn() utility
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
