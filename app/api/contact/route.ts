import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_TO_EMAIL,
  buildContactEmailHtml,
  categoryLabels,
  type ContactPayload,
  validateContactPayload,
} from "@/lib/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendViaResend(data: ContactPayload) {
  if (!resend) return { ok: false as const, error: "Resend not configured" };

  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_TO_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "株式会社　縁RIGHT お問い合わせ <onboarding@resend.dev>";
  const categoryLabel = categoryLabels[data.category] ?? data.category;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `【お問い合わせ】${categoryLabel} — ${data.name} 様`,
    html: buildContactEmailHtml(data),
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false as const, error: "メールの送信に失敗しました。" };
  }
  return { ok: true as const };
}

/** Resend 利用時のみ（通常はフォームが Web3Forms を直接呼び出します） */
export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "この API は Resend 設定時のみ利用できます。" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が不正です。" },
      { status: 400 }
    );
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  try {
    const result = await sendViaResend(validated.data);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
