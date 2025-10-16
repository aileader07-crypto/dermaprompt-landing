import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "DermaPrompt - AI 피부 분석 서비스",
  description:
    "사진 한 장으로 피부 상태를 분석하고 맞춤 관리 루틴을 제안합니다.",
  keywords: ["AI 피부 분석", "스킨케어", "피부 진단", "맞춤형 루틴"],
  authors: [{ name: "DermaPrompt" }],
  openGraph: {
    title: "DermaPrompt - AI 피부 분석 서비스",
    description:
      "사진 한 장으로 피부 상태를 분석하고 맞춤 관리 루틴을 제안합니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DermaPrompt - AI 피부 분석 서비스",
    description:
      "사진 한 장으로 피부 상태를 분석하고 맞춤 관리 루틴을 제안합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased bg-[#e8e3d8]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
