import { NextResponse } from "next/server";
import * as deepl from "deepl-node";

const authKey = process.env.DEEPL_API_KEY as string;
const deeplClient = new deepl.Translator(authKey);

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json();
    const result = await deeplClient.translateText(text, null, targetLang);

    const translated = Array.isArray(result) ? result[0].text : result.text;
    return NextResponse.json({ translated });
  } catch (error: any) {
    console.error("DeepL error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Use POST with { text, targetLang }" });
}
