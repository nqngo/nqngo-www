import { writable } from "svelte/store";

export interface ChatMessage {
  role: "[*_*]/" | "[O.O]-";
  message: string;
}
export let chatMessages = writable<ChatMessage[]>([]);

export async function submitChat(prompt: ChatMessage) {
  chatMessages.update(oldMessages => [...oldMessages, prompt]);
  const response = await fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prompt),
  });

  let msg = '';

  if (!response.ok) {
    msg = "I'm sorry. Something went wrong. Please try again later.";
  } else {
    const { body } = await response.json();
     msg = body.message;
  }
  const output: ChatMessage = { role: '[O.O]-', message: msg };
  chatMessages.update(oldMessages => [...oldMessages, output]);
}