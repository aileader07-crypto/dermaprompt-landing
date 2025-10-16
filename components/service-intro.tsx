import { Camera, Sparkles, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServiceIntro() {
  return (
    <section className="bg-[#e8e3d8] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-[#2d2d2d] sm:text-4xl lg:text-5xl">
            AI가 당신의 피부를 이해하는 순간
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-[#5a5a5a] leading-relaxed">
            DermaPrompt는 피부과 전문 기준의 AI 분석으로 당신의 피부 상태를
            과학적으로 진단합니다.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-[#d4cfc4] shadow-sm hover:shadow-md transition-shadow rounded-3xl bg-[#faf8f3]">
            <CardContent className="p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6eb5af]/10">
                <Camera className="h-8 w-8 text-[#6eb5af]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#2d2d2d]">
                📸 사진/텍스트 입력
              </h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                피부 사진을 업로드하거나 증상을 텍스트로 입력하세요. 간편하게
                시작할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#d4cfc4] shadow-sm hover:shadow-md transition-shadow rounded-3xl bg-[#faf8f3]">
            <CardContent className="p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6eb5af]/10">
                <Sparkles className="h-8 w-8 text-[#6eb5af]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#2d2d2d]">
                🧠 AI 분석 및 리포트
              </h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                피부과 전문 기준의 AI가 당신의 피부 상태를 분석하고 상세한
                리포트를 생성합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#d4cfc4] shadow-sm hover:shadow-md transition-shadow rounded-3xl bg-[#faf8f3]">
            <CardContent className="p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6eb5af]/10">
                <Lightbulb className="h-8 w-8 text-[#6eb5af]" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#2d2d2d]">
                💡 맞춤형 루틴 제안
              </h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                분석 결과를 바탕으로 당신에게 최적화된 스킨케어 루틴과 제품을
                추천합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-center text-sm italic text-[#5a5a5a]">
          *AI는 의료 행위를 대신하지 않습니다.
        </p>
      </div>
    </section>
  );
}
