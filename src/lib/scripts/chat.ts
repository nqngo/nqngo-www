import { writable, get } from "svelte/store";

export interface ChatMessage {
  role: "user" | "system" | "assistant";
  content: string;
}
export let chatMessages = writable<ChatMessage[]>([]);

export async function submitChat(prompt: ChatMessage) {
  chatMessages.update(oldMessages => [...oldMessages, prompt]);

  const response = await fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(get(chatMessages)),
  });

  let msg = '';

  if (!response.ok) {
    msg = "I'm sorry. Something went wrong. Please try again later.";
  } else {
    const { body } = await response.json();
     msg = body.content;
  }
  const output: ChatMessage = { role: 'assistant', content: msg };
  chatMessages.update(oldMessages => [...oldMessages, output]);
}