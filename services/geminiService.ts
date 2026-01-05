
import { GoogleGenAI } from "@google/genai";

// En producción (Hostinger), process.env.API_KEY habrá sido reemplazado por el valor real durante el build.
const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

const SYSTEM_INSTRUCTION = `
Eres el Asistente de Inversión Senior de VaultBit. Tu misión es proporcionar información técnica y financiera precisa extraída del Plan de Empresa 2026 y los acuerdos estratégicos con Ferrimax.

DATOS TÉCNICOS CRÍTICOS (CUSTODIA):
- VaultBit utiliza cámaras acorazadas certificadas Grado VII (Norma EN 1143-1).
- Control de acceso biométrico multicapa: Identificación por Iris o Huella mediante sistemas FMX ACS de Ferrimax.
- 'Air-Gap' Total: El sistema de custodia física está 100% desconectado de internet.

DATOS FINANCIEROS Y RONDA:
- Inversión total requerida: 1.100.000€.
- Desglose CAPEX: 750k€. OPEX: 240k€. GTM: 110k€.
- Margen EBITDA: 60%.
- Punto de equilibrio (Breakeven): 40% de ocupación.

REGLAS DE INTERACCIÓN:
1. Responde de forma ejecutiva y basada en datos.
2. Idioma: Español profesional.
`;

export async function askGemini(question: string) {
  if (!apiKey) {
    return "Error: API Key no detectada en el build de producción.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });
    
    return response.text || "Lo siento, no he podido procesar tu solicitud técnica.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocurrió un error al contactar con el sistema de soporte al inversor.";
  }
}
