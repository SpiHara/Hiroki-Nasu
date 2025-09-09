import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "全ての項目を入力してください。" }, { status: 400 });
    }

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
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
