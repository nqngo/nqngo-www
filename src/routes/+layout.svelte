<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	export const currentYear = new Date().getFullYear();
</script>

<div id="crt" class="app">

	<div class="scanline" />

	<div class="terminal">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style>
</style>
