<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { PUBLIC_KEE, PUBLIC_ID, PUBLIC_TEMPLATE } from '$env/static/public';
	import { send, init } from '@emailjs/browser';
	import { themeFacade } from '$lib';

	let email = $state('');
	let name = $state('');
	let title = $state('');
	let message = $state('');
	let time = $state(Date.now());

	onMount(() => {
		setTimeout(() => {
			time = Date.now();
		}, 1000);
	});

	async function sendEmail() {
		init({ publicKey: PUBLIC_KEE });
		const emailRequest = {
			title,
			name,
			email,
			message,
			time
		};
		const response = await send(PUBLIC_ID, PUBLIC_TEMPLATE, emailRequest, {
			publicKey: PUBLIC_KEE
		});
	}
</script>

<form class={themeFacade().theme}>
	<input name="time" placeholder="time" type="text" class="sr-only" bind:value={time} />

	<input
		name="email"
		placeholder="email"
		class="input input-primary"
		type="text"
		bind:value={email}
	/>
	<input name="name" placeholder="name" class="input input-primary" type="text" bind:value={name} />
	<input
		name="title"
		placeholder="title"
		class="input input-primary"
		type="text"
		bind:value={title}
	/>
	<textarea name="message" placeholder="message" class="input input-primary" bind:value={message}
	></textarea>

	<button class="btn btn-primary" type="button" onclick={sendEmail}>Send Message</button>
</form>

<style>
	.dark textarea,
	.dark input {
		color: white;
		background: #333;
	}
	.light textarea,
	.light input {
		color: black;
		background: #dfdfdf;
	}
	input,
	textarea {
		display: block;
		width: 100%;
		color: black;
		height: 96px;
		margin-bottom: 12px;
		font-size: 14px;
	}
	input {
		height: 24px;
	}
</style>
