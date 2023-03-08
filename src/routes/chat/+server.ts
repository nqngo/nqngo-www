import { type RequestHandler, type RequestEvent, json } from '@sveltejs/kit';
import { ChatGPTAPI } from 'chatgpt';

const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
      completionParams: {
          model: 'gpt-3.5-turbo',
          temperature: 0.5,
          frequency_penalty: 0.5
      }
  });

const INIT_PROMPT = Buffer.from(process.env.CHATGPT_INIT_PROMPT, 'base64').toString('utf-8');

const base_prompt = await api.sendMessage(INIT_PROMPT)
console.log(base_prompt.text)

// Return the base prompt
export const GET = ( async () => {
  return json({
    status: 200,
    body: {
      message: base_prompt.text,
    },
  });
})

export const POST = ( async ({ request }: RequestEvent) => {
  const { role, message } = await request.json();

  if (!message) {
    return json({
      status: 400,
      body: {
        error: 'Message is required',
      },
    });
  }

  const gptResponse = await api.sendMessage(message, {
    parentMessageId: base_prompt.id
  })

  return json({
    status: 200,
    body: {
      message: gptResponse.text,
    },
  });
}) satisfies RequestHandler;