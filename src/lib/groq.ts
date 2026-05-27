import OpenAI from "openai";

/**
 * Singleton du client Groq.
 * Créé une seule fois par processus Node — évite le coût d'instanciation
 * à chaque requête API (new OpenAI + await import).
 */
let _client: OpenAI | null = null;

export function getGroqClient(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY non définie");
  if (!_client) {
    _client = new OpenAI({ apiKey, baseURL: "https://api.groq.com/openai/v1" });
  }
  return _client;
}

export function hasGroqKey(): boolean {
  return !!process.env.GROQ_API_KEY;
}
