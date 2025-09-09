// pages/api/translate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method !== "POST") {
          return res.status(405).json({ error: "Method not allowed" });
     }

     try {
          const { text, target_lang } = req.body;

          if (!text || !target_lang) {
               return res.status(400).json({ error: "Missing required fields" });
          }

          const translatedText = `${text} [${target_lang}]`;

          // If you want to call DeepL later, it would go here:
          // const response = await fetch("https://api-free.deepl.com/v2/translate", {
          //   method: "POST",
          //   headers: {
          //     "Authorization": `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
          //     "Content-Type": "application/x-www-form-urlencoded",
          //   },
          //   body: `text=${encodeURIComponent(text)}&target_lang=${target_lang}`,
          // });
          // const deeplData = await response.json();
          // const translatedText = deeplData.translations?.[0]?.text || text;

          return res.status(200).json({ translatedText });
     } catch (error) {
          console.error("Translate API Error:", error);
          return res.status(500).json({ error: "Internal server error" });
     }
}
