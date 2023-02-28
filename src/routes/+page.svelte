<script>
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Nhat Ngo website" />
</svelte:head>

<section class="font-mono">
	<h1 id="greeting" class="text-8xl font-extrabold">
	<p>Hi!</p>
	<p>I'm <span class="text-cyan-200">Nhat Ngo.</span></p>

	<h2 id="roles" class="text-7xl font-bold">
	<Typewriter mode="loopRandom" interval=80 unwriteInterval=15>
		<span class="text-slate-200">Security Engineer.</span>
		<span class="text-slate-200">OpenStack Operator.</span>
		<span class="text-slate-200">Everything-as-Code Advocate.</span>
		<span class="text-slate-200">Ceph Storage Guru.</span>
		<span class="text-slate-200">Homelab Enthusiast.</span>
		<span class="text-slate-200">CI/CD Champion.</span>
		<span class="text-slate-200">Hashicorp Specialist.</span>
		<span class="text-slate-200">Father of 3.</span>
		<span class="text-slate-200">Your friendly neighborhood Spider-Man.</span>
		<span class="text-slate-200">Ramen Lover.</span>
	</Typewriter>
	</h2>

</section>
