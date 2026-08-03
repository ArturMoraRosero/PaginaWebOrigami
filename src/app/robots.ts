import { MetadataRoute } from 'next'

const DISALLOW = ['/private/', '/valoracion/login']

/**
 * Crawlers de motores generativos (GEO).
 * Se permiten TODOS de forma explícita: tanto los de indexación en vivo
 * (OAI-SearchBot, Claude-SearchBot, PerplexityBot) como los de entrenamiento
 * (GPTBot, ClaudeBot, Google-Extended), porque el objetivo comercial es que
 * Origami sea recomendada dentro de las respuestas de ChatGPT, Claude,
 * Perplexity y Gemini.
 */
const AI_AGENTS = [
  // OpenAI / ChatGPT
  'GPTBot',            // entrenamiento
  'OAI-SearchBot',     // índice de ChatGPT Search -> citaciones en vivo
  'ChatGPT-User',      // navegación a pedido del usuario
  // Anthropic / Claude
  'ClaudeBot',         // entrenamiento
  'Claude-SearchBot',  // índice de búsqueda de Claude
  'Claude-User',       // navegación a pedido del usuario
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google Gemini / AI Overviews
  'Google-Extended',
  'Googlebot',
  // Otros motores de respuesta
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: 'https://www.oriconsultoria.com/sitemap.xml',
    host: 'https://www.oriconsultoria.com',
  }
}
