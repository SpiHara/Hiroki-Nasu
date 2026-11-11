import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    const to = process.env.SENDGRID_TO_EMAIL;
    const from = process.env.SENDGRID_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("SendGrid environment variables are not configured.");
      return NextResponse.json(
        { error: "お問い合わせ機能は現在ご利用いただけません。" },
        { status: 503 }
      );
    }

    sgMail.setApiKey(apiKey);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "全ての項目を入力してください。" }, { status: 400 });
    }

    const msg = {
      to,
      from,
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nメール: ${email}\n内容: ${message}`,
      html: `<p><strong>名前:</strong> ${name}</p>
             <p><strong>メール:</strong> ${email}</p>
             <p><strong>内容:</strong> ${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "お問い合わせありがとうございました！" });
  } catch (err: any) {
    console.error("SendGrid error:", err);
    return NextResponse.json({ error: "送信中にエラーが発生しました。" }, { status: 500 });
  }
}
