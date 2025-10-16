"use server";

import { notion, NOTION_DATABASE_ID } from "@/lib/notion";

export interface WaitlistData {
  name: string;
  email: string;
}

export async function addToWaitlist(data: WaitlistData) {
  try {
    console.log("🚀 웨이팅 리스트 등록 시작:", data);

    // 입력값 검증
    if (!data.name || !data.email) {
      console.log("❌ 입력값 부족");
      return {
        success: false,
        error: "이름과 이메일을 모두 입력해주세요.",
      };
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      console.log("❌ 이메일 형식 오류");
      return {
        success: false,
        error: "올바른 이메일 형식이 아닙니다.",
      };
    }

    console.log("✅ 입력값 검증 완료");

    // Notion 데이터베이스에 페이지 추가
    console.log("📝 Notion API 호출 시작...");
    console.log("Database ID:", NOTION_DATABASE_ID);

    const payload = {
      parent: {
        database_id: NOTION_DATABASE_ID!,
      },
      properties: {
        // "이름" 속성 (Title 타입)
        이름: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        // "이메일" 속성 (Email 타입)
        이메일: {
          email: data.email,
        },
      },
    };

    console.log("📤 전송할 데이터:", JSON.stringify(payload, null, 2));

    const response = await notion.pages.create(payload);

    console.log("✅ Notion API 성공:", response.id);

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("❌ Notion API 오류:", error);
    console.error("상세 에러:", JSON.stringify(error, null, 2));

    // 에러 메시지 처리
    let errorMessage = "등록 중 오류가 발생했습니다.";

    if (error instanceof Error) {
      console.error("에러 메시지:", error.message);
      console.error("에러 스택:", error.stack);

      // Notion API 에러 처리
      if (error.message.includes("Could not find database")) {
        errorMessage =
          "데이터베이스를 찾을 수 없습니다. NOTION_DATABASE_ID를 확인하세요.";
      } else if (
        error.message.includes("Unauthorized") ||
        error.message.includes("unauthorized")
      ) {
        errorMessage = "API 인증에 실패했습니다. NOTION_API_KEY를 확인하세요.";
      } else if (error.message.includes("object does not match schema")) {
        errorMessage =
          "Notion 데이터베이스 속성이 일치하지 않습니다. '이름'과 '이메일' 속성을 확인하세요.";
      } else {
        errorMessage = `오류: ${error.message}`;
      }
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}
