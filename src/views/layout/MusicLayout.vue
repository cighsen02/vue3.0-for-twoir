<template>
	<music-header />
	<div class="container-xxl my-4 bd-layout">
		<div class="bd-sidebar">
			
		</div>
		
		<div class="bd-intro pt-md-3 pl-lg-4">
			<img class="rounded mx-auto d-block" src="../../assets/images/logo.png">
			<router-view />
			
		</div>
		
		<div class="bd-toc pl-xl-3 text-muted mb-lg-5">
			
			中间备用<br><br><br><br><br><br><br><br>备用<br><br><br><br>
			
		</div>
		
		<main class="bd-content order-1 pl-lg-4">
			备用<br><br><br><br><br><br><br>
		</main>
	</div>
</template>

<script>
import MusicHeader from '../components/MusicHeader.vue'

export default {
	components: { MusicHeader }
}
</script>