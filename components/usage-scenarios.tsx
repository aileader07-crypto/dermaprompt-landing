"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User, Clock, Video } from "lucide-react";

export function UsageScenarios() {
  const scenarios = [
    {
      icon: User,
      title: "민감성 피부인 지현님",
      description: "트러블 원인 분석 및 개선 루틴 제안",
      detail:
        "반복되는 트러블의 원인을 AI가 분석하고, 피부 타입에 맞는 순한 제품과 관리법을 추천받았습니다.",
    },
    {
      icon: Clock,
      title: "출근 전 3분 진단",
      description: "스킨케어 루틴 조정",
      detail:
        "바쁜 아침, 빠르게 피부 상태를 체크하고 오늘 필요한 스킨케어 단계를 조정할 수 있습니다.",
    },
    {
      icon: Video,
      title: "콘텐츠 크리에이터 준호님",
      description: "뷰티 브랜드 협업 전 피부 데이터 분석",
      detail:
        "뷰티 콘텐츠 제작 전, 객관적인 피부 데이터를 확보하여 더 신뢰도 높은 리뷰를 제공합니다.",
    },
  ];

  return (
    <section className="bg-[#e8e3d8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-[#2d2d2d] sm:text-4xl lg:text-5xl">
            사용 시나리오 예시
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {scenarios.map((scenario, index) => (
              <Card
                key={index}
                className="min-w-[320px] flex-shrink-0 border border-[#d4cfc4] shadow-lg snap-start sm:min-w-[380px] bg-[#faf8f3]"
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5BA6A0]/10">
                    <scenario.icon className="h-7 w-7 text-[#5BA6A0]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#2d2d2d]">
                    {scenario.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-[#5BA6A0]">
                    {scenario.description}
                  </p>
                  <p className="text-[#5a5a5a] leading-relaxed">
                    {scenario.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-lg font-medium text-[#2d2d2d]">
          당신의 피부 여정도 곧 시작됩니다.
        </p>
      </div>
    </section>
  );
}
