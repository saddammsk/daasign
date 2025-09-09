export default async function handler(req, res) {
     if (req.method !== "POST") {
          return res.status(405).json({ error: "Method not allowed" });
     }

     const { text, target_lang } = req.body;

     try {
          const response = await fetch("https://api-free.deepl.com/v2/translate", {
               method: "POST",
               headers: { "Content-Type": "application/x-www-form-urlencoded" },
               body: new URLSearchParams({
                    auth_key: process.env.DEEPL_API_KEY,
                    text,
                    target_lang,
               }),
          });

          const data = await response.json();
          return res.status(200).json({ translation: data.translations[0].text });
     } catch (error) {
          return res.status(500).json({ error: "Translation failed" });
     }
}
