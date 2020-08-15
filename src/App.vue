<template>
	<div class="container">
		<img src="./assets/images/logo.png">
		<h1>Hello Vue 3!</h1>
		<br />
		<button class="btn btn-primary" @click="inc">Clicked {{ count }} times.</button>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		const count = ref(0)
		const inc = () => {
			count.value++
		}

		// effect(function log(){
		// 	console.log('count changed!', count.value)
		// })
				
		return {
			count,
			inc
		}
	}
}
</script>

<style>
	body {
		text-align: center;
	}
	img {
	  width: 200px;
	}
	h1 {
	  font-family: Arial, Helvetica, sans-serif;
	}
</style>
