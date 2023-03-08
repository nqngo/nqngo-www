<script>
	import { concurrent } from 'svelte-typewriter/modes';
	import ChatModal from "./ChatModal.svelte";
</script>

<label for="chatbox" class="absolute bottom-8 p-3 mt-2 border-2 rounded-lg mx-auto round text-slate-100">
	<span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
		<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-50 opacity-75"></span>
		<span class="relative inline-flex rounded-full h-3 w-3 bg-orange-400"></span>
	  </span>
	<span use:concurrent={{ interval: 180 }}>&gt;_ Ask me anything...</span>
</label>

<ChatModal />
