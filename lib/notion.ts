import { Client } from "@notionhq/client";

// 환경변수 로그 (디버깅용 - 실제 키는 노출하지 않음)
console.log("환경변수 체크:");
console.log("- NOTION_API_KEY 존재:", !!process.env.NOTION_API_KEY);
console.log("- NOTION_DATABASE_ID 존재:", !!process.env.NOTION_DATABASE_ID);
console.log(
  "- NOTION_DATABASE_ID 값:",
  process.env.NOTION_DATABASE_ID
    ? `${process.env.NOTION_DATABASE_ID.substring(0, 8)}...`
    : "없음"
);

// 환경변수 검증
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!process.env.NOTION_API_KEY) {
  console.error("❌ NOTION_API_KEY 환경변수가 설정되지 않았습니다.");
  throw new Error("NOTION_API_KEY 환경변수가 설정되지 않았습니다.");
}

if (!NOTION_DATABASE_ID) {
  console.error("❌ NOTION_DATABASE_ID 환경변수가 설정되지 않았습니다.");
  throw new Error("NOTION_DATABASE_ID 환경변수가 설정되지 않았습니다.");
}

// Notion 클라이언트 초기화
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

console.log("✅ Notion 클라이언트 초기화 완료");
