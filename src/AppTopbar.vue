<template>
	<div class="layout-topbar">
		<div class="layout-topbar-left">
			<div class="layout-topbar-logo-container">
				<router-link to="/" class="layout-topbar-logo">
					<img alt="Logo" src="/assets/layout/images/logo.svg" />
				</router-link>
				<button class="p-link layout-topbar-button" @click="onMenuToggle">
					<span class="pi pi-bars layout-topbar-icon"></span>
				</button>
			</div>
		</div>
		<div class="layout-topbar-right">
			<a title="Github Repo" target="blank" href="https://github.com/savannabits/sigma-vite" class="p-link layout-topbar-button">
				<span class="layout-topbar-icon pi pi-github"></span>
			</a>
			<button class="p-link layout-topbar-button">
				<span class="layout-topbar-item-text">Settings</span>
				<span class="layout-topbar-icon pi pi-cog"></span>
			</button>
			<button class="p-link layout-topbar-button">
				<span class="layout-topbar-item-text">User</span>
				<span class="layout-topbar-icon pi pi-user"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        }
    }
}
</script>