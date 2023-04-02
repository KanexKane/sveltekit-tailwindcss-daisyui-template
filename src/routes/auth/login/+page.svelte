<script>
	export let form;
	import { onMount } from 'svelte';

	let inputUsername, inputPassword, inputForm;

	onMount(() => {
		// เริ่มต้นมาให้โฟกัสที่ช่องกรอก Username เลย
		inputUsername.focus();
	});

	// หากกดปุ่ม Enter ที่ช่อง Input ให้ทำอะไร
	function enterTo(event, action) {
		if (event.key.toLowerCase() === 'enter') {
			if (action === 'password') {
				inputPassword.focus();
			} else if (action === 'submit') {
				inputForm.submit();
			}
		}
	}
</script>

<div class="container mx-auto py-10">
	<div class="card w-fit mx-auto bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title text-3xl">เข้าสู่ระบบ</h2>

			<form method="post" bind:this={inputForm}>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text">Username</span>
					</label>
					<input
						type="text"
						name="username"
						bind:this={inputUsername}
						class="input input-bordered input-primary w-full max-w-xs"
						value={form?.username || ''}
						on:keypress={(e) => enterTo(e, 'password')}
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs mb-3">
					<label class="label">
						<span class="label-text">Password</span>
					</label>
					<input
						type="password"
						name="password"
						bind:this={inputPassword}
						class="input input-bordered w-full max-w-xs"
						required
						value={form?.password || ''}
						on:keypress={(e) => enterTo(e, 'submit')}
					/>
				</div>

				{#if form?.message}
					<div>
						<p class="text-error">{form.message}</p>
					</div>
				{/if}

				<div class="form-control w-full max-w-xs mt-10">
					<button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
				</div>
			</form>
		</div>
	</div>
</div>

<div class="container mx-auto" />
