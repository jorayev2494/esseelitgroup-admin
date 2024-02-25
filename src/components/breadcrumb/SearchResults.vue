<template>
    <!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-8 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
									<li class="breadcrumb-item active" aria-current="page">Search</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">2245 matches found for : Mentors In Florida</h2>
						</div>
						<div class="col-md-4 col-12 d-md-block d-none">
							<div class="sort-by">
								<span class="sort-title">Sort by</span>
								<span class="sortby-fliter">
									<vue-select :options="options" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
    <!-- /Breadcrumb -->
</template>

<script>

export default {
	setup() {
		const options =  ["Select", "Rating", "Popular", "Latest", "Free"]

		return {
			options
		}
	},
}
</script>
