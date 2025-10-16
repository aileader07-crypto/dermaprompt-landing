"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle2,
  Target,
  Shield,
  TrendingUp,
} from "lucide-react";
import { WaitlistModal } from "@/components/waitlist-modal";

export function ReportPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#f5f1e8] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-[#2d2d2d] sm:text-4xl lg:text-5xl">
            AI 보고서 미리보기
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-[#5a5a5a] leading-relaxed">
            DermaPrompt가 생성하는 상세한 피부 분석 리포트를 확인해보세요.
          </p>
        </div>

        <Card className="mb-10 border border-[#d4cfc4] shadow-sm rounded-3xl overflow-hidden bg-[#f5f1e8]">
          <CardContent className="p-10 bg-[#f5f1e8]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#2d2d2d]">
                AI 전문가의 솔직한 평가
              </h3>
              <TrendingUp className="h-6 w-6 text-[#6eb5af]" />
            </div>
            <div className="mb-4">
              <div className="text-4xl font-bold text-[#6eb5af] mb-2">+15%</div>
              <p className="text-sm text-[#5a5a5a]">
                투명 사용 시 예상되는 피부 개선 정도
              </p>
            </div>
            {/* Simple wave visualization */}
            <div className="h-32 flex items-end justify-between gap-2 mt-8">
              <div
                className="flex-1 bg-[#6eb5af]/20 rounded-t-lg"
                style={{ height: "60%" }}
              ></div>
              <div
                className="flex-1 bg-[#6eb5af]/30 rounded-t-lg"
                style={{ height: "75%" }}
              ></div>
              <div
                className="flex-1 bg-[#6eb5af]/40 rounded-t-lg"
                style={{ height: "50%" }}
              ></div>
              <div
                className="flex-1 bg-[#6eb5af]/50 rounded-t-lg"
                style={{ height: "85%" }}
              ></div>
              <div
                className="flex-1 bg-[#6eb5af]/60 rounded-t-lg"
                style={{ height: "70%" }}
              ></div>
              <div
                className="flex-1 bg-[#6eb5af] rounded-t-lg"
                style={{ height: "90%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-xs text-[#5a5a5a]">
              <span>소집 먹스치</span>
              <span>피부 톤다</span>
              <span>피부 윤기</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10 border border-[#d4cfc4] shadow-sm rounded-3xl bg-[#f5f1e8]">
          <CardContent className="p-10 sm:p-14">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6eb5af]/10">
                    <CheckCircle2 className="h-7 w-7 text-[#6eb5af]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[#2d2d2d]">
                    1️⃣ 피부 상태 분석
                  </h3>
                  <p className="text-[#5a5a5a] leading-relaxed">
                    현재 피부 타입, 수분도, 유분도, 민감도 등을 종합적으로
                    분석합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6eb5af]/10">
                    <AlertTriangle className="h-7 w-7 text-[#6eb5af]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[#2d2d2d]">
                    2️⃣ 문제 요인
                  </h3>
                  <p className="text-[#5a5a5a] leading-relaxed">
                    트러블, 건조함, 색소침착 등 주요 피부 고민의 원인을
                    파악합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6eb5af]/10">
                    <Target className="h-7 w-7 text-[#6eb5af]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[#2d2d2d]">
                    3️⃣ 개선 전략
                  </h3>
                  <p className="text-[#5a5a5a] leading-relaxed">
                    맞춤형 스킨케어 루틴, 추천 성분, 생활 습관 개선 방법을
                    제시합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-2xl bg-[#f4a89f]/10 p-8 border border-[#f4a89f]/30">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4a89f]/20">
                    <Shield className="h-7 w-7 text-[#2d2d2d]" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[#2d2d2d]">
                    안전 최우선 가이드
                  </h3>
                  <div className="space-y-2 text-[#5a5a5a]">
                    <p className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#f4a89f] mt-1">✓</span>
                      <span>제제 테스트: 성분 정보 보기</span>
                    </p>
                    <p className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#f4a89f] mt-1">✓</span>
                      <span>정상 적용 반응: 심한 정보 보기</span>
                    </p>
                    <p className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#f4a89f] mt-1">✓</span>
                      <span>부작용 대처 프로세스: 심한 정보 보기</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#6eb5af] text-[#2d2d2d] hover:bg-[#5da49e] text-base sm:text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            웨이팅 리스트 등록하기
          </Button>
        </div>
      </div>

      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
