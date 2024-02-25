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
									<li class="breadcrumb-item active">SEO Settings</li>
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
										<div class="card-header">
											<h5 class="card-title">SEO Settings</h5>
										</div>
										<div class="card-body pt-0">
											
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Meta Title <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group">
														<label>Meta Keywords <span class="star-red">*</span></label>
														<input type="text" data-role="tagsinput" class="input-tags form-control" placeholder="Meta Keywords" name="services" value="Lorem,Ipsum" id="services">
													</div>
													<div class="form-group">
														<label>Meta Description <span class="star-red">*</span></label>
														<textarea class="form-control"></textarea>
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Submit</button>
															<button type="submit" class="btn btn-grey">Cancel</button>
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