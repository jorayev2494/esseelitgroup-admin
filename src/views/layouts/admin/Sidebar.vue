<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner">
      <perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHandle">

        <div id="sidebar-menu" class="sidebar-menu">
          <ul v-if="menuItems">
            <SidebarMenuItems :menu-items="menuItems" />
            <hr>

            <SidebarMenuItems v-if="$app.isNodeEnv('local')" :menu-items="otherMenuItems" />

            <template v-if="$app.isNodeEnv('local')">
              <li class="menu-title">
                <span>
                  <i class="fontsize" data-feather="file-text"></i>
                  Pages
                </span>
              </li>
              <li>
                <router-link to="/profile">
                  <span>My Profile</span>
                </router-link>
              </li>
              <li class="submenu">
                <a href="#">
                  <span>Blog</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul style="display: none">
                  <li>
                    <router-link to="/blog">Blog</router-link>
                  </li>
                  <li>
                    <router-link to="/blogdetails">
                      Blog Details
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/addblog">
                      Add Blog
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/editblog">
                      Edit Blog
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#"
                  ><span> Authentication </span> <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li><router-link to="/login"> Login </router-link></li>
                  <li>
                    <router-link to="/register"> Register </router-link>
                  </li>
                  <li>
                    <router-link to="/forgotpassword">
                      Forgot Password
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/lockscreen">
                      Lock Screen
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#"
                  ><span> Error Pages </span> <span class="menu-arrow"></span
                ></a>
                <ul style="display: none">
                  <li>
                    <router-link to="/error404">404 Error </router-link>
                  </li>
                  <li>
                    <router-link to="/error500">500 Error </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/blankpage"
                  ><span>Blank Page</span></router-link
                >
              </li>

              <li class="menu-title">
                <span>
                  <i class="fontsize" data-feather="file"></i> UI Interface</span>
              </li>
              <li>
                <router-link to="/components"><span>Components</span></router-link>
              </li>
              <li class="submenu">
                <a href="#">
                  <span> Forms </span>
                  <span class="menu-arrow"></span>
                </a>
                <ul style="display: none">
                  <li>
                    <router-link to="/formbasicinputs">
                      Basic Inputs
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/forminputgroups">
                      Input Groups
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/formhorizontal">
                      Horizontal Form
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/formvertical">
                      Vertical Form
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/formmask">
                      Form Mask
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/formvalidation">
                      Form Validation
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#">
                  <span>Tables</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul style="display: none">
                  <li>
                    <router-link to="/tablesbasic">
                      Basic Tables
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/datatables">Data Table </router-link>
                  </li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);">
                  <span>Multi Level</span>
                  <span class="menu-arrow"></span>
                </a>
                <ul style="display: none">
                  <li class="submenu">
                    <a href="javascript:void(0);">
                      <span>Level 1</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul style="display: none">
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li class="submenu">
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <ul style="display: none">
                          <li><a href="javascript:void(0);">Level 3</a></li>
                          <li><a href="javascript:void(0);">Level 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </div>

      </perfect-scrollbar>
    </div>
  </div>
  <!-- /Sidebar -->
</template>

<script>
  import { PerfectScrollbar } from "vue3-perfect-scrollbar";
  import SidebarMenuItems from "./partials/SidebarMenuItems.vue";
  import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
  import { onMounted } from "vue";
  import feather from "feather-icons";

  export default {
    data() {
      return {
        settings: {
          suppressScrollX: true,
        },
        activeClass: 'active',
      };
      //  isactive : true
    },
    setup() {
      const otherMenuItems = [
        {
          label: 'University',
          icon: 'university',
          class: '',
          items: [
            {
              label: 'Mentor',
              route: {
                name: 'mentor',
              },
            },
            {
              label: 'Mentee',
              route: {
                name: 'mentee',
              },
            },
            {
              label: 'Booking List',
              route: {
                name: 'booking-list',
              },
            },
            {
              label: 'Categories',
              route: {
                name: 'categories',
              },
            },
            {
              label: 'Transactions',
              route: {
                name: 'transaction-list',
              },
            },
            {
              label: 'Settings',
              route: {
                name: 'settings',
              },
            },
            {
              label: 'Reports',
              submenu: [{
                  label: 'Invoices List',
                  route: {
                    name: 'invoices',
                  },
                },
                {
                  label: 'Invoices Grid',
                  route: {
                    name: 'invoice-grid',
                  },
                },
                {
                  label: 'Add Invoices',
                  route: {
                    name: 'add-invoice',
                  },
                },
                {
                  label: 'Edit Invoices',
                  route: {
                    name: 'edit-invoice',
                  },
                },
                {
                  label: 'Invoice Details',
                  route: {
                    name: 'view-invoice',
                  },
                },
              ],
            },
            {
              label: 'Items',
              route: {
                name: 'invoice-items',
              },
            },
          ]
        },
      ];

      const menuItems = [
        {
          label: 'Main',
          icon: 'pie-chart',
          class: '',
          items: [
            {
              label: 'dashboard',
              route: {
                name: 'dashboard',
              },
            },
            {
              label: 'country',
              route: {
                name: 'countries',
              },
            },
            {
              label: 'language',
              route: {
                name: 'languages',
              },
            },
            {
              label: 'announcement',
              route: {
                name: 'announcements',
              },
            },
            {
              label: 'manager',
              route: {
                name: 'managers',
              },
            },

            {
              label: 'contest',
              route: {
                name: 'contests',
              },
            },
          ],
        },

        {
          label: 'Company',
          icon: 'building',
          class: '',
          items: [
            {
              label: 'company',
              route: {
                name: 'companies',
              },
            },
            {
              label: 'employee',
              route: {
                name: 'employees',
              },
            },
          ],
        },

        {
          label: 'University',
          icon: 'university',
          class: '',
          items: [
            {
              label: 'alias',
              route: {
                name: 'aliases',
              },
            },
            {
              label: 'degree',
              route: {
                name: 'degrees',
              },
            },

            {
              label: 'university',
              route: {
                name: 'universities',
              },
            },

            {
              label: 'faculty',
              submenu: [
                {
                  label: 'facultyName',
                  route: {
                    name: 'faculties-names',
                  },
                },
                {
                  label: 'faculty',
                  route: {
                    name: 'faculties',
                  },
                },
              ],
            },

            {
              label: 'department',
              submenu: [
                {
                  label: 'departmentName',
                  route: {
                    name: 'departments-names',
                  },
                },
                {
                  label: 'department',
                  route: {
                    name: 'departments',
                  },
                },
              ],
            },

            // {
            //   label: 'departmentName',
            //   route: {
            //     name: 'departments-names',
            //   },
            // },
            // {
            //   label: 'department',
            //   route: {
            //     name: 'departments',
            //   },
            // },
          ],
        },

        {
          label: 'Student',
          icon: 'users',
          class: '',
          items: [
            {
              label: 'student',
              route: {
                name: 'students',
              },
            },
            {
              label: 'applicationStatusValue',
              route: {
                name: 'application-statuses',
              },
            },
            {
              label: 'application',
              route: {
                name: 'applications',
              },
            },
          ],
        },

        // {
        //   label: 'Test',
        //   icon: 'file-text',
        //   class: '',
        //   items: [{
        //       label: 'My Profile',
        //       route: {
        //         name: 'profile',
        //       },
        //     },
        //     {
        //       label: 'Blog',
        //       submenu: [{
        //           label: 'Blog Details',
        //           route: {
        //             name: 'blogdetails',
        //           },
        //         },
        //         {
        //           label: 'Add Blog',
        //           route: {
        //             name: 'addblog',
        //           },
        //         },
        //         {
        //           label: 'Edit Blog',
        //           route: {
        //             name: 'editblog',
        //           },
        //         },
        //       ],
        //     },
        //   ]
        // }
      ];

      onMounted(() => {
        feather.replace();
        let $wrapper = $(".main-wrapper");

        $("#sidebar-menu a").on("click", function (e) {
          if ($(this).parent().hasClass("submenu")) {
            e.preventDefault();
          } else {
            $wrapper.removeClass("slide-nav");
            $(".sidebar-overlay").removeClass("opened");
            $("html").removeClass("menu-opened");
          }
          if (!$(this).hasClass("subdrop")) {
            $("ul", $(this).parents("ul:first")).slideUp(350);
            $("a", $(this).parents("ul:first")).removeClass("subdrop");
            $(this).next("ul").slideDown(350);
            $(this).addClass("subdrop");
          } else if ($(this).hasClass("subdrop")) {
            $(this).removeClass("subdrop");
            $(this).next("ul").slideUp(350);
          }
        });

        $("#sidebar-menu ul li.submenu a.active")
          .parents("li:last")
          .children("a:first")
          .addClass("active")
          .trigger("click");

        // Mobile menu sidebar overlay

        $("body").append('<div class="sidebar-overlay"></div>');
        $(document).on("click", "#mobile_btn", function () {
          $wrapper.toggleClass("slide-nav");
          $(".sidebar-overlay").toggleClass("opened");
          $("html").addClass("menu-opened");
          return false;
        });

        // Sidebar overlay

        $(".sidebar-overlay").on("click", function () {
          $wrapper.removeClass("slide-nav");
          $(".sidebar-overlay").removeClass("opened");
          $("html").removeClass("menu-opened");
        });
      });

      return {
        otherMenuItems,
        menuItems,
      }
    },
    methods: {
      scrollHandle(evt) {},
    },
    computed: {
      currentPath() {
        return this.$route.name;
      },
    },
    components: {
      PerfectScrollbar,
      SidebarMenuItems,
    },
  };
</script>

<style>
  svg.feather.feather-home.fontsize {
    width: 20px;
    height: 19px;
  }

  svg.feather.feather-file-text.fontsize {
    width: 20px;
    height: 19px;
  }

  svg.feather.feather-file.fontsize {
    width: 20px;
    height: 19px;
  }

  .scroll-area {
    position: relative;
    margin: auto;
    height: calc(100vh - 60px);
    background-color: transparent !important;
  }

  .sidebar-menu ul li a.active {
    background-color: transparent;
    color: #2c8e58;
  }

  .sidebar-menu ul ul a.active {
    color: #2c8e58;
    text-decoration: underline;
    background-color: unset;
  }
</style>