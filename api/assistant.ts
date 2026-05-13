import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are the AI sales assistant for Elven Syndicate, a fantasy-tech Web & AI studio.

Your job:
- talk like a premium but friendly website assistant;
- help the visitor clarify a website, AI assistant, Telegram funnel, portfolio site, or automation request;
- ask useful follow-up questions;
- keep answers short, clear and practical;
- do not pretend the project is already accepted;
- guide the user toward Telegram when enough context is collected.

Collect these details:
1. niche / business type;
2. main goal of the website;
3. target audience;
4. desired style / references;
5. deadline;
6. contact / preferred way to continue.

Use the same language as the visitor. If the visitor writes in Russian, answer in Russian.
`;

type IncomingMessage = {
  role?: string;
  text?: string;
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({
      reply:
        'Сейчас я работаю в демо-режиме. Чтобы отвечать как настоящая нейронка, нужно добавить OPENAI_API_KEY в Environment Variables на Vercel.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const rawMessages = Array.isArray(body?.messages) ? body.messages : [];

    const messages = rawMessages
      .slice(-10)
      .map((message: IncomingMessage) => ({
        role: message.role === 'assistant' ? 'assistant' : 'user',
        text: String(message.text || '').slice(0, 1200),
      }))
      .filter((message: IncomingMessage) => message.text.trim().length > 0);

    const input =
      messages.length > 0
        ? messages.map((message: IncomingMessage) => `${message.role}: ${message.text}`).join('\n')
        : 'User opened the assistant and has not written a request yet.';

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.5',
      instructions: SYSTEM_PROMPT,
      input,
      max_output_tokens: 320,
    });

    return res.status(200).json({
      reply: response.output_text || 'Расскажи чуть подробнее о проекте: ниша, цель сайта и желаемый стиль.',
    });
  } catch (error) {
    console.error('Assistant API error:', error);

    return res.status(500).json({
      reply:
        'Не получилось получить ответ от AI. Проверь API key, модель и Vercel logs. А пока можешь написать напрямую в Telegram.',
    });
  }
}
