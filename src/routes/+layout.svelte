<script>
	import Header from './Header.svelte';
	import '../app.css';
	export const currentYear = new Date().getFullYear();
</script>

<div id="crt" class="app">
	<!-- slowly moving scanline -->
	<div class="scanline"></div>
	<!-- the input and output -->
	<div class="terminal">
	<Header />

		<main>
			<slot />
		</main>

		<footer class="font-mono">
			<p>Copyright © {currentYear} Nhat Ngo. All rights reserved.</p>
		</footer>
	</div>
</div>

<style>

</style>
