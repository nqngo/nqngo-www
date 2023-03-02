<script>
	import { concurrent } from "svelte-typewriter";
	import Chat from "./Chat.svelte";
</script>

<label for="chatbox" class="absolute bottom-8 p-3 mt-2 border rounded-lg mx-auto round text-slate-100">
	<span use:concurrent={{ interval: 120 }}>&gt;_ Ask me anything...</span>
</label>

<Chat />
