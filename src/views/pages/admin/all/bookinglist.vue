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
              <h3 class="page-title">Bookings</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/admin/index">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Bookings</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->
        <div class="row">
          <div class="col-md-12">
            <!-- Recent Orders -->
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Mentor Name</th>
                        <th>Course</th>
                        <th>Mentee Name</th>
                        <th>Booking Time</th>
                        <th>Status</th>
                        <th class="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in bookinglist" :key="item.id">
                        <td>
                          <h2 class="table-avatar">
                            <router-link
                              to="/admin/profile"
                              class="avatar avatar-sm me-2"
                              ><img
                                class="avatar-img rounded-circle"
                                :src="
                                  require(`@/assets/img/admin/user/${item.image}`)
                                "
                                alt="User Image"
                            /></router-link>
                            <router-link to="/admin/profile">{{
                              item.name
                            }}</router-link>
                          </h2>
                        </td>
                        <td>{{ item.course }}</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link
                              to="/admin/profile"
                              class="avatar avatar-sm me-2"
                              ><img
                                class="avatar-img rounded-circle"
                                :src="
                                  require(`@/assets/img/admin/user/${item.image}`)
                                "
                                alt="User Image"
                            /></router-link>
                            <router-link to="/admin/profile"
                              >{{ item.menteename }}
                            </router-link>
                          </h2>
                        </td>
                        <td>
                          {{ item.date }}
                          <span class="text-primary d-block">{{
                            item.time
                          }}</span>
                        </td>
                        <td>
                          <div class="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              class="check"
                              checked
                            />
                            <label for="status_1" class="checktoggle"
                              >checkbox</label
                            >
                          </div>
                        </td>
                        <td class="text-center">
                          {{ item.earned }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /Recent Orders -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import bookinglist from "@/assets/json/admin/Booking/bookinglist.json";
export default {
  data() {
    return {
      bookinglist: bookinglist,
    };
  },
  setup() {
    onMounted(() => {
      if ($(".datatable").length > 0) {
        $(".datatable").DataTable({
          bFilter: false,
        });
      }
    });
  },
};
</script>
