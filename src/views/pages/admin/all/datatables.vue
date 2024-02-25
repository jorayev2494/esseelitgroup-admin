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
							<div class="col">
								<h3 class="page-title">Data Tables</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Data Tables</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Default Datatable</h4>
									<p class="card-text">
										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
									</p>
								</div>
								<div class="card-body">

									<div class="table-responsive">
										<table class="datatable table table-stripped">
											<thead>
												<tr>
													<th>Name</th>
													<th>Position</th>
													<th>Office</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Salary</th>
												</tr>
											</thead>
											<tbody>
												<tr  v-for="item in datatables" :key="item.id">
													<td>{{item.name}}</td>
													<td>{{item.position}}</td>
													<td>{{item.office}}</td>
													<td>{{item.age}}</td>
													<td>{{item.date}}</td>
													<td>{{item.salary}}</td>
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
			<!-- /Main Wrapper -->
    </div>
</template>
<script>
    import datatables from '@/assets/json/admin/Datatables/datatables.json'
	import { onMounted } from 'vue';
    export default {
        data() {
			return {
				datatables: datatables
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
		},
    }
</script>