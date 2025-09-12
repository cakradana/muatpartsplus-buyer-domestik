import { Toaster } from "@muatmuat/ui/Toaster";

import { TranslationProvider } from "@/hooks/use-translation";

import "./globals.scss";

export const metadata = {
  title: "Muatparts Plus Seller",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TranslationProvider>
        <body className="bg-background font-sans antialiased">{children}</body>
        <Toaster />
      </TranslationProvider>
    </html>
  );
}
