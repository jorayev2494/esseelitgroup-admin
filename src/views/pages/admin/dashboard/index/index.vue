<template>
    <div class="content container-fluid">
        <div class="row">
            <Announcement />
        </div>

        <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-primary border-primary">
                                <i class="fa fa-users"></i>
                            </span>
                            <div class="dash-count">
                                <h3>168</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            <h6 class="text-muted">Members</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-primary w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-success border-success">
                                <i class="fa fa-credit-card"></i>
                            </span>
                            <div class="dash-count">
                                <h3>487</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Appointments</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-success w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-danger border-danger">
                                <i class="fa fa-star"></i>
                            </span>
                            <div class="dash-count">
                                <h3>485</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Mentoring Points</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-danger w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-warning border-warning">
                                <i class="fa fa-folder"></i>
                            </span>
                            <div class="dash-count">
                                <h3>$62523</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Revenue</h6>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-warning w-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 col-lg-6">

                <!-- Sales Chart -->
                <div class="card card-chart">
                    <div class="card-header">
                        <h4 class="card-title">Revenue</h4>
                    </div>
                    <div class="card-body">
                        <div id="morrisArea"></div>
                    </div>
                </div>
                <!-- /Sales Chart -->

            </div>
            <div class="col-md-12 col-lg-6">

                <!-- Invoice Chart -->
                <div class="card card-chart">
                    <div class="card-header">
                        <h4 class="card-title">Status</h4>
                    </div>
                    <div class="card-body">
                        <div id="morrisLine"></div>
                    </div>
                </div>
                <!-- /Invoice Chart -->

            </div>
        </div>
        <div class="row">
            <div class="col-md-6 d-flex">

                <!-- Recent Orders -->
                <div class="card card-table flex-fill">
                    <div class="card-header">
                        <h4 class="card-title">Mentor List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Mentor Name</th>
                                        <th>Course</th>
                                        <th>Earned</th>
                                        <th>Reviews</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in mentorlist" :key="item.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img
                                                        class="avatar-img rounded-circle"
                                                        :src="require(`@/assets/img/admin/profiles/${item.image}`)"
                                                        alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{item.name}}</router-link>
                                            </h2>
                                        </td>
                                        <td>{{item.course}}</td>
                                        <td>{{item.earned}}</td>
                                        <td>
                                            <i class="fa fa-star text-warning menteee"></i>
                                            <i class="fa fa-star text-warning menteee"></i>
                                            <i class="fa fa-star text-warning menteee"></i>
                                            <i class="fa fa-star text-warning menteee"></i>
                                            <i class="fa fa-star-o text-secondary"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /Recent Orders -->

            </div>
            <div class="col-md-6 d-flex">

                <!-- Feed Activity -->
                <div class="card  card-table flex-fill">
                    <div class="card-header">
                        <h4 class="card-title">Mentee List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Mentee Name</th>
                                        <th>Phone</th>
                                        <th>Last Visit</th>
                                        <th>Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in menteelist" :key="item.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img
                                                        class="avatar-img rounded-circle"
                                                        :src="require(`@/assets/img/admin/profiles/${item.image}`)"
                                                        alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{item.name}} </router-link>
                                            </h2>
                                        </td>
                                        <td>{{item.phone}}</td>
                                        <td>{{item.lastvisit}}</td>
                                        <td class="text-right">{{item.paid}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /Feed Activity -->

            </div>
        </div>
        <div class="row">
            <div class="col-md-12">

                <!-- Recent Orders -->
                <div class="card card-table">
                    <div class="card-header">
                        <h4 class="card-title">Booking List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Mentor Name</th>
                                        <th>course</th>
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
                                                <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img
                                                        class="avatar-img rounded-circle"
                                                        :src="require(`@/assets/img/admin/profiles/${item.image}`)"
                                                        alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{item.name}}</router-link>
                                            </h2>
                                        </td>
                                        <td>{{item.course}}</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm me-2"><img
                                                        class="avatar-img rounded-circle"
                                                        :src="require(`@/assets/img/admin/profiles/${item.image}`)"
                                                        alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{item.menteename}} </router-link>
                                            </h2>
                                        </td>
                                        <td>{{item.date}} <span class="text-primary d-block">{{item.time}}</span>
                                        </td>
                                        <td>
                                            <div class="status-toggle">
                                                <input type="checkbox" id="status_1" class="check" checked>
                                                <label for="status_1" class="checktoggle">checkbox</label>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            {{item.amount}}
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
</template>

<script>
    import Announcement from '../../announcement/components/list/Index.vue'
    import mentorlist from '@/assets/json/admin/AdminIndex/mentorlist.json'
    import menteelist from '@/assets/json/admin/AdminIndex/menteelist.json'
    import bookinglist from '@/assets/json/admin/AdminIndex/bookinglist.json'
    import {
        onMounted
    } from 'vue';

    export default {
        data() {
            return {
                mentorlist: mentorlist,
                menteelist: menteelist,
                bookinglist: bookinglist
            }
        },
        setup() {
            onMounted(() => {
                $(function () {

                    /* Morris Area Chart */

                    window.mA = Morris.Area({
                        element: 'morrisArea',
                        data: [{
                                y: '2013',
                                a: 60
                            },
                            {
                                y: '2014',
                                a: 100
                            },
                            {
                                y: '2015',
                                a: 240
                            },
                            {
                                y: '2016',
                                a: 120
                            },
                            {
                                y: '2017',
                                a: 80
                            },
                            {
                                y: '2018',
                                a: 100
                            },
                            {
                                y: '2019',
                                a: 300
                            },
                        ],
                        xkey: 'y',
                        ykeys: ['a'],
                        labels: ['Revenue'],
                        lineColors: ['#1b5a90'],
                        lineWidth: 2,

                        fillOpacity: 0.5,
                        gridTextSize: 10,
                        hideHover: 'auto',
                        resize: true,
                        redraw: true
                    });

                    /* Morris Line Chart */

                    window.mL = Morris.Line({
                        element: 'morrisLine',
                        data: [{
                                y: '2015',
                                a: 100,
                                b: 30
                            },
                            {
                                y: '2016',
                                a: 20,
                                b: 60
                            },
                            {
                                y: '2017',
                                a: 90,
                                b: 120
                            },
                            {
                                y: '2018',
                                a: 50,
                                b: 80
                            },
                            {
                                y: '2019',
                                a: 120,
                                b: 150
                            },
                        ],
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Doctors', 'Patients'],
                        lineColors: ['#1b5a90', '#ff9d00'],
                        lineWidth: 1,
                        gridTextSize: 10,
                        hideHover: 'auto',
                        resize: true,
                        redraw: true
                    });
                    $(window).on("resize", function () {
                        mA.redraw();
                        mL.redraw();
                    });
                });

                $(document).on('click', '#toggle_btn', function () {
                    if ($('body').hasClass('mini-sidebar')) {
                        $('body').removeClass('mini-sidebar');
                        $('.subdrop + ul').slideDown();
                    } else {
                        $('body').addClass('mini-sidebar');
                        $('.subdrop + ul').slideUp();
                    }
                    return false;
                });
                $(document).on('mouseover', function (e) {
                    e.stopPropagation();
                    if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                        var targ = $(e.target).closest('.sidebar').length;
                        if (targ) {
                            $('body').addClass('expand-menu');
                            $('.subdrop + ul').slideDown();
                        } else {
                            $('body').removeClass('expand-menu');
                            $('.subdrop + ul').slideUp();
                        }
                        return false;
                    }
                });
            })


            return {

            }
        },
        components: {
            Announcement,
        },
    }
</script>
<style>
    .fa-users {
        font-size: 20px;
    }

    .fa-credit-card {
        font-size: 20px;
    }

    .fa-money {
        font-size: 20px;
    }

    .fa-folder {
        font-size: 20px;
    }

    .fa-star {
        font-size: 20px;
    }

    .menteee {
        font-size: 12px;
    }
</style>