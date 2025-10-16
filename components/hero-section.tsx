"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/waitlist-modal";
import { Sparkles, Upload, Brain, FileText } from "lucide-react";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-[#6eb5af]" />
          <h1 className="text-2xl font-bold text-[#2d2d2d]">DermaPrompt</h1>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
              단 3초, AI 전문가가 당신의 피부를 완벽하게 분석합니다
            </h2>
            <p className="mb-10 text-pretty text-lg text-[#5a5a5a] sm:text-xl leading-relaxed">
              사진 한 장으로 피부 상태를 분석하고 맞춤 관리 루틴을 제안합니다.
            </p>
            <div>
              <Button
                size="lg"
                className="bg-[#6eb5af] text-[#2d2d2d] hover:bg-[#5da49e] text-base sm:text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                AI 피부 진단 시작하기
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#faf8f3] p-8 shadow-sm border border-[#d4cfc4]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6eb5af]/10">
                  <Upload className="h-10 w-10 text-[#6eb5af]" />
                </div>
                <div className="text-center">
                  <div className="mb-2 text-base font-bold text-[#6eb5af]">
                    ① 업로드
                  </div>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">
                    피부 사진 업로드
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#faf8f3] p-8 shadow-sm border border-[#d4cfc4]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6eb5af]/10">
                  <Brain className="h-10 w-10 text-[#6eb5af]" />
                </div>
                <div className="text-center">
                  <div className="mb-2 text-base font-bold text-[#6eb5af]">
                    ② 분석
                  </div>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">
                    AI 분석
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#faf8f3] p-8 shadow-sm border border-[#d4cfc4]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6eb5af]/10">
                  <FileText className="h-10 w-10 text-[#6eb5af]" />
                </div>
                <div className="text-center">
                  <div className="mb-2 text-base font-bold text-[#6eb5af]">
                    ③ 리포트
                  </div>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">
                    리포트 생성
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
