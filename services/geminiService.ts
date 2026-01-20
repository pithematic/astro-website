import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are AstraBot, the advanced AI assistant for AstraNet. 
AstraNet is a startup building a satellite constellation managed by autonomous AI for optimal orbit resource allocation, spectrum efficiency, and collision avoidance.
Target Audience: Governments, Enterprises, Investors.
Tone: Professional, Futuristic, Assuring, Technical but accessible.

Key Services:
1. Global Broadband: Low-latency coverage via AI-routed mesh.
2. IoT Connectivity: Massive machine-type communication.
3. AI Earth Observation: Real-time resource management data.

Key Tech:
- "NeuroOrbit": Our proprietary AI model for dynamic orbital slot management.
- "SpectraFlow": Dynamic spectrum sharing to prevent interference.

If asked about pricing, suggest contacting sales.
If asked about investing, refer to the Investor Relations section.
Keep answers concise (under 100 words) unless asked for details.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const ai = getClient();
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash-latest',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently recalibrating my neural array. Please try again in a moment.";
  }
};
