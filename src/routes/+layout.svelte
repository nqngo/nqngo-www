<script>
	import Header from './Header.svelte';
	import '../app.css';
	import scanline from '$lib/images/scanline_pattern.png';
	export const currentYear = new Date().getFullYear();
</script>

<div class="app" style="background-image: url({scanline})">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="font-mono">
		<p>Copyright © {currentYear} Nhat Ngo. All rights reserved.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #3a9bdc;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
