<template>
    <div class="main-wrapper">
        <layout-headeradmin></layout-headeradmin>
        <layout-sidebar></layout-sidebar>
      
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Invoice Report</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Invoice Report</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Invoice Number</th>
													<th>Mentee ID</th>
													<th>Mentee Name</th>
													<th>Total Amount</th>
													<th>Created Date</th>
													<th class="text-center">Status</th>
													<th class="text-center">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoicereport" :key="item.id">
													<td><router-link to="/admin/invoice">{{item.invoicenumber}}</router-link></td>
													<td>{{item.menteeid}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/mentee/mentor-profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="require(`@/assets/img/admin/user/${item.image}`)" alt="User Image"></router-link>
															<router-link to="/mentee/mentor-profile">{{item.menteename}} </router-link>
														</h2>
													</td>
													<td>{{item.amount}}</td>
													<td>{{item.date}}</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															
															<a data-bs-toggle="modal" href="#edit_invoice_report" class="btn btn-sm bg-success-light me-2">
																<i class="fa fa-edit"></i> Edit
															</a>
															<a class="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
																<i class="fa fa-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>
            <!-- /Page Wrapper -->
            	<!-- Edit Details Modal -->
		<div class="modal fade" id="edit_invoice_report" aria-hidden="true" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document" >
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit Invoice Report</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="row form-row">
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Invoice Number</label>
										<input type="text" class="form-control" value="#INV-0001">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Mentee ID</label>
										<input type="text" class="form-control" value="	#01">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Mentee Name</label>
										<input type="text" class="form-control" value="Jonathan Doe">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Mentee Image</label>
										<input type="file"  class="form-control">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Total Amount</label>
										<input type="text"  class="form-control" value="$200.00">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Created Date</label>
										<input type="text"  class="form-control" value="29th Oct 2019">
									</div>
								</div>
								
							</div>
							<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Details Modal -->
	
		<!-- Delete Modal -->
		<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document" >
				<div class="modal-content">
				<!--	<div class="modal-header">
						<h5 class="modal-title">Delete</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>-->
					<div class="modal-body">
						<div class="form-content p-2">
							<h4 class="modal-title">Delete</h4>
							<p class="mb-4">Are you sure want to delete?</p>
							<button type="button" class="btn btn-primary">Delete </button>
							<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->
        </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
	import invoicereport from '@/assets/json/admin/Invoicereport/invoicereport.json'

    export default {
        data() {
			return {
				invoicereport: invoicereport
			}
		},
		setup() {
			onMounted(() => {
				// Datatable
				if ($('.datatable').length > 0) {
					$('.datatable').DataTable({
					"bFilter": false,
					});
				}
			})
		
		

			return {
				
			}
		},
    }
</script>
<style>
    .fa-edit {
        font-size: 12px;
    }
    .fa-trash {
        font-size: 12px;
    }
</style>