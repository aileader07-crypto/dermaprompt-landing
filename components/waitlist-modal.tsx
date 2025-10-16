"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";
import { addToWaitlist } from "@/actions/notion";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Notion API를 통해 웨이팅 리스트에 추가
      const result = await addToWaitlist({
        name,
        email,
      });

      if (result.success) {
        // 성공
        setIsSuccess(true);
        setName("");
        setEmail("");

        // 2초 후 모달 닫기
        setTimeout(() => {
          setIsSuccess(false);
          onOpenChange(false);
        }, 2000);
      } else {
        // 실패
        setError(result.error || "등록 중 오류가 발생했습니다.");
      }
    } catch (err) {
      console.error("웨이팅 리스트 등록 오류:", err);
      setError("입력 정보를 다시 확인해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">
            웨이팅 리스트 등록
          </DialogTitle>
          <DialogDescription className="text-[#6b7280]">
            출시되면 가장 먼저 알려드릴게요.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="mb-4 h-16 w-16 text-[#5BA6A0]" />
            <p className="text-center text-lg font-medium text-[#1a1a1a]">
              🎉 웨이팅 리스트 등록 완료!
            </p>
            <p className="mt-2 text-center text-sm text-[#6b7280]">
              출시되면 가장 먼저 알려드릴게요.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1a1a1a]">
                이름
              </Label>
              <Input
                id="name"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="border-[#5BA6A0]/20 focus:border-[#5BA6A0]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1a1a1a]">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="border-[#5BA6A0]/20 focus:border-[#5BA6A0]"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#5BA6A0] text-white hover:bg-[#4a8a85]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  등록 중...
                </>
              ) : (
                "등록하기"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
