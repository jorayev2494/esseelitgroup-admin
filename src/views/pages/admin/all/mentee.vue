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
                        <h3 class="page-title">List of Mentee</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                            <li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
                            <li class="breadcrumb-item active">Mentee</li>
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
                                            <th>Mentee Name</th>
                                            <th>Course</th>
                                            <th>Member Since</th>
                                            <th>Earned</th>
                                            <th class="text-center">Account Status</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in mentee" :key="item.id">
                                            <td>
                                                <h2 class="table-avatar">
                                                    <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="require(`@/assets/img/admin/profiles/${item.image}`)" alt="User Image"></router-link>
                                                    <router-link to="/admin/profile">{{item.name}} </router-link>
                                                </h2>
                                            </td>
                                            <td>{{item.course}}</td>
                                            
                                            <td>{{item.date}} <br><small>{{item.time}}</small></td>
                                            
                                            <td>{{item.earned}}</td>
                                            
                                            <td>
                                                <div class="status-toggle d-flex justify-content-center">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
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
        </div>
</template>
<script>
    import { onMounted } from 'vue'
    import mentee from '@/assets/json/admin/Mentee/mentee.json'

    export default {
        data() {
            return {
                mentee: mentee
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
        }   
    }
</script>