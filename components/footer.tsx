import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#d4cfc4] bg-[#f5f1e8] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 space-y-4">
          <h3 className="text-sm font-semibold text-[#2d2d2d]">면책 고지</h3>
          <p className="max-w-3xl text-sm text-[#5a5a5a] leading-relaxed">
            AI는 의료 행위를 대신할 수 없습니다. DermaPrompt의 분석 결과는
            참고용이며, 피부에 이상 반응이나 부작용이 발생할 경우 즉시 사용을
            중단하고 피부과 전문의와 상담하시기 바랍니다.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#d4cfc4] pt-8 sm:flex-row">
          <p className="text-sm text-[#5a5a5a]">
            © 2025 DermaPrompt. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#5a5a5a] transition-colors hover:text-[#5BA6A0]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#5a5a5a] transition-colors hover:text-[#5BA6A0]"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#5a5a5a] transition-colors hover:text-[#5BA6A0]"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
