import { type RequestHandler, type RequestEvent, json } from '@sveltejs/kit';
import { Configuration, OpenAIApi} from "openai";

// OpenAI configuration creation
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// OpenAI instance creation
const openai = new OpenAIApi(configuration);

// Create a new instance of the OpenAI API
const GPT_MODEL = 'gpt-3.5-turbo';
const GPT_TEMPERATURE = 0.5;
const GPT_FREQUENCY_PENALTY = 0.5;
const INIT_PROMPT = Buffer.from(process.env.CHATGPT_INIT_PROMPT, 'base64').toString('utf-8');
const INIT_MESSAGE = { role: 'user', content: INIT_PROMPT}
let INIT_COMPLETION;

// Return the base prompt
export const GET = ( async () => {

  INIT_COMPLETION = await openai.createChatCompletion({
    model: GPT_MODEL,
    temperature: GPT_TEMPERATURE,
    frequency_penalty: GPT_FREQUENCY_PENALTY,
    messages: [ INIT_MESSAGE ],
  })
  const base_prompt = INIT_COMPLETION.data.choices[0].message;
  return json({
    status: 200,
    body: {
      content: base_prompt.content,
    },
  });
})

// Return the messages
export const POST = ( async ({ request }: RequestEvent) => {
  const prompts = await request.json();
  const messages = [INIT_MESSAGE, ...prompts]

  const gptResponse = await openai.createChatCompletion({
    model: GPT_MODEL,
    temperature: GPT_TEMPERATURE + 0.2,
    frequency_penalty: GPT_FREQUENCY_PENALTY,
    messages: messages,
  });

  const output = gptResponse.data.choices[0].message;

  return json({
    status: 200,
    body: {
      content: output.content,
    },
  });
}) satisfies RequestHandler;