<template>
    <!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-8 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
									<li class="breadcrumb-item active" aria-current="page">Mentee List</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Mentee List</h2>
						</div>
						<div class="col-md-4 col-12">
							<form class="search-form custom-search-form">
								<div class="input-group">
									<input type="text" placeholder="Search Mentees..." class="form-control">
									<div class="input-group-append">
										<button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    <!-- /Breadcrumb -->
</template>