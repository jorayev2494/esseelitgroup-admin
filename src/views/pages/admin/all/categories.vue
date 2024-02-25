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
                            <h3 class="page-title">Categories</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Categories</li>
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
                                                <th>#</th>
                                                <th>Category</th>
                                                <th>Date</th>
                                                <th class="text-center">Reviews</th>
                                                <th class="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in categories" :key="item.id">
                                                <td>
                                                    {{item.sno}}
                                                </td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="require(`@/assets/img/admin/user/${item.image}`)" alt="User Image"></router-link>
                                                        <router-link to="/admin/profile">{{item.category}}</router-link>
                                                    </h2>
                                                </td>
                                                
                                                <td>{{item.date}}</td>

                                                <td class="text-center">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>

                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light me-2" data-bs-toggle="modal" href="#edit_modal">
                                                            <i class="fa fa-edit"></i>
                                                            Edit
                                                        </a>
                                                        <a data-bs-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
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
        	<!-- Edit Modal -->
		<div class="modal fade" id="edit_modal" aria-hidden="true" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document" >
				<div class="modal-content">
					<div class="modal-body">
						<div class="form-content p-2">
							<div class="modal-header border-0">
								<h4 class="modal-title">Edit</h4>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div class="card">
								<div class="card-body">
					                <form id="update_category" method="post" autocomplete="off" enctype="multipart/form-data" novalidate="novalidate" class="bv-form"><button type="submit" class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
					                	<input type="hidden" name="csrf_token_name" value="104dbdaf79d7d8e21e4ae9991d166669">
					                    <div class="form-group">
					                        <label>Category Name</label>
					                        <input class="form-control" type="text" value="Painting" name="category_name" id="category_name" data-bv-field="category_name">
											<input class="form-control" type="hidden" value="8" name="category_id" id="category_id">
					                    <small class="help-block" data-bv-validator="remote" data-bv-for="category_name" data-bv-result="NOT_VALIDATED" style="display: none;">This category name is already exist</small><small class="help-block" data-bv-validator="notEmpty" data-bv-for="category_name" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter category name</small></div>
					                    <div class="form-group">
					                        <label>Category Image</label>
					                        <input class="form-control" type="file" name="category_image" id="category_image">
					                    </div>
					                    <div class="form-group">
											<div class="avatar">
												<img class="avatar-img rounded" src="@/assets/img/admin/user/user.jpg" alt="">
											</div>
					                    </div>
					                    <div class="mt-4">
					                        <button class="btn btn-primary me-2" name="form_submit" value="submit" type="submit">Save Changes</button>
											<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
					                    </div>
					                </form>
					            </div>
					        </div>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Modal -->

		<!-- Delete Model -->
		<div class="modal fade" id="delete_modal" role="dialog" style="display: none;" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
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
		<!-- Delete Model -->
        </div>
</template>
<script>
    import categories from '@/assets/json/admin/Categories/categories.json'
    import { onMounted } from 'vue';
    
    export default {
        data() {
            return {
                categories: categories
            }
	    },
        setup() {
            onMounted(() => {
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
      .fa-star {
        font-size: 12px;
    }
    .fa-edit {
        font-size: 12px;
    }
    .fa-trash {
        font-size: 12px;
    }
</style>