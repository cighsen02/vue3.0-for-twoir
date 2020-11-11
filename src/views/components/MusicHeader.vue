<template>
	<header class="navbar navbar-expand-md navbar-dark bd-navbar">
		<nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
			<a class="navbar-brand brand-logo" href="/" aria-label="土尔网络旅游实景，提供视觉、听觉分享平台(twoir.com)!">
				土尔网
			</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
				<svg class="bi" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
				</svg>
			</button>

			<div class="collapse navbar-collapse" id="bdNavbar">
				<ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
					<li class="nav-item col-6 col-md-auto">
						<router-link active-class="active" class="nav-link p-3" to="/">首页</router-link>
					</li>
					<li class="nav-item col-6 col-md-auto">
						<router-link active-class="active" class="nav-link p-3" to="/music">土尔音乐</router-link>
					</li>
					<li class="nav-item col-6 col-md-auto">
						<router-link active-class="active" class="nav-link p-3" to="/contact">关于我们</router-link>
					</li>
				</ul>
			</div>
			<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
				<li class="nav-item dropdown">
					<a class="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						v1.0.1
					</a>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
						<a class="dropdown-item" href="tud.html">jQuery版 v1.0.1</a>
						<router-link to="/music" active-class="active" class="dropdown-item">VUE版 v1.0.2</router-link>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="###">所有版体</a>
					</div>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
</script>