<script lang="ts">
	import { onMount } from 'svelte';
	import { type ChatMessage, submitChat, chatMessages } from '$lib/scripts/chat';

	let question: string = '';

	function handleSubmit(event: Event) {
		if (!question) return;

		const message: ChatMessage = { role: 'user', content: question };

		submitChat(message);
		question = '';
	}

	onMount(async () => {
		const response = await fetch('/chat');
		let msg = '';
		if (!response.ok) {
			msg = "I'm sorry. Something went wrong. Please try again later.";
		} else {
			const { body } = await response.json();
			msg = body.content;
		}
		const init_prompt: ChatMessage = { role: 'assistant', content: msg };
		chatMessages.update((oldMessages) => [...oldMessages, init_prompt]);
	});

</script>

<input type="checkbox" id="chatbox" class="modal-toggle" />
<div class="modal">
	<div class="modal-box h-full w-11/12 max-w-screen-xl">
		<form class="flex flex-col h-full w-full" on:submit|preventDefault={handleSubmit}>
			<div id="chatarea" class="grow text-slate-100">
				{#each $chatMessages as chat}
					<div>[{chat.role}] {@html chat.content}</div>
				{/each}
				<div class="modal-action">
					<label for="chatbox" class="btn border">End Convo</label>
				</div>
			</div>
			<div class="flex-none">
				<input
					type="text"
					bind:value={question}
					placeholder="Ask me something, go on!"
					class="input input-bordered w-full prompt"
				/>
			</div>
		</form>
	</div>
</div>

<style>
	.modal {
		z-index: 98;
		background-color: #3a9bdc;
		box-shadow: inset 0 0 4em rgba(0, 0, 0, 1);
	}

	.modal::after {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(253, 244, 244, 0.1);
		opacity: 0;
		z-index: 99;
		pointer-events: none;
		animation: flicker 10s infinite;
	}

	.modal-box {
		background-color: #2b81bb;
	}

	.prompt {
		@apply text-slate-100;
		@apply border-slate-100;
		background-color: #3a9bdc;
	}

	.prompt::placeholder {
		@apply text-slate-200;
		@apply border-2;
		@apply italic;
	}
</style>
