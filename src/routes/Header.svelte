<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header>

	<nav class="font-mono px-2 sm:px-4 py-2.5 rounded">
		<div class="container flex flex-wrap items-center justify-between mx-auto">
			<a href="/" class="flex items-center">
				<img src="{logo}" class="invisible md:visible h-14 mt-2" alt="Logo" />
			</a>
		<ul class="flex flex-col">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				class="p-3 mt-2 border border-slate-100 rounded-lg bg-slate-100
				hover:bg-slate-400 hover:border-slate-400 hover:text-slate-100">
				<a href="/">Home</a>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</div>
	</nav>
<!-- 
	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
	li[aria-current="page"] {
		display: none;
	}
</style>
