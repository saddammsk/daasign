import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     try {
          if (req.method !== "POST") {
               return res.status(405).json({ error: "Method not allowed" });
          }

          const { text, targetLang } = req.body;

          if (!text || !targetLang) {
               return res.status(400).json({ error: "Missing required fields" });
          }

          // Example: dummy translation (replace with real API call)
          const translatedText = `${text} [${targetLang}]`;

          return res.status(200).json({ translatedText });
     } catch (error) {
          console.error("Translate API Error:", error);
          return res.status(500).json({ error: "Internal server error" });
     }
}
