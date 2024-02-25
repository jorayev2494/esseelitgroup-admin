<template>
    <div class="main-wrapper">
        <layout-headeradmin></layout-headeradmin>
        <layout-sidebar></layout-sidebar>
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					<div class="page-header">
						<div class="row">
							<div class="col-sm-6">
								<h3 class="page-title">Settings</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item"><router-link to="/admin/settings">Settings</router-link></li>
									<li class="breadcrumb-item active">Social Settings</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Settings Menu -->
					<settings></settings>
					<!-- Settings Menu -->
					
						<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Google Login Credential</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_1" class="check" checked="">
												<label for="status_1" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Facebook</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_2" class="check" checked="">
												<label for="status_2" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>App ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>App Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Twiter Login Credential</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_3" class="check">
												<label for="status_3" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
					<!-- /Settings -->
					
				</div>
			</div>
			<!-- /Page Wrapper -->
        </div>
</template>