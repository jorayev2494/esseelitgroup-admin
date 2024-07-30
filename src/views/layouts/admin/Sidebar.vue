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

  import { makePermission, makeAnyPermission } from '@/services/acl/useACLProtection';
  import { RESOURCE_ACTIONS as DASHBOARD_RESOURCE_ACTIONS } from '@/views/pages/admin/dashboard/acl/constants';
  import { RESOURCE_ACTIONS as COUNTRY_RESOURCE_ACTIONS } from '@/views/pages/admin/countryAndCity/country/acl/constants';
  import { RESOURCE_ACTIONS as CITY_RESOURCE_ACTIONS } from '@/views/pages/admin/countryAndCity/city/acl/constants';
  import { RESOURCE_ACTIONS as LANGUAGE_RESOURCE_ACTIONS } from '@/views/pages/admin/language/acl/constants';
  import { RESOURCE_ACTIONS as ANNOUNCEMENT_RESOURCE_ACTIONS } from '@/views/pages/admin/announcement/acl/constants';
  import { RESOURCE_ACTIONS as CONTEST_RESOURCE_ACTIONS } from '@/views/pages/admin/contest/acl/constants';
  import { RESOURCE_ACTIONS as DOCUMENT_RESOURCE_ACTIONS } from '@/views/pages/admin/document/acl/constants';
  import { RESOURCE_ACTIONS as COMPANY_RESOURCE_ACTIONS } from '@/views/pages/admin/company/acl/constants';
  import { RESOURCE_ACTIONS as EMPLOYEE_RESOURCE_ACTIONS } from '@/views/pages/admin/employee/acl/constants';
  import { RESOURCE_ACTIONS as STUDENT_RESOURCE_ACTIONS } from '@/views/pages/admin/student/acl/constants';
  import { RESOURCE_ACTIONS as APPLICATION_STATUS_VALUE_RESOURCE_ACTIONS } from '@/views/pages/admin/applicationStatusValue/acl/constants';
  import { RESOURCE_ACTIONS as ALIAS_RESOURCE_ACTIONS } from '@/views/pages/admin/alias/acl/constants';
  import { RESOURCE_ACTIONS as DEGREE_RESOURCE_ACTIONS } from '@/views/pages/admin/degree/acl/constants';
  import { RESOURCE_ACTIONS as UNIVERSITY_RESOURCE_ACTIONS } from '@/views/pages/admin/university/acl/constants';
  import { RESOURCE_ACTIONS as FACULTY_NAME_RESOURCE_ACTIONS } from '@/views/pages/admin/facultyName/acl/constants';
  import { RESOURCE_ACTIONS as FACULTY_RESOURCE_ACTIONS } from '@/views/pages/admin/faculty/acl/constants';
  import { RESOURCE_ACTIONS as DEPARTMENT_NAME_RESOURCE_ACTIONS } from '@/views/pages/admin/departmentName/acl/constants';
  import { RESOURCE_ACTIONS as DEPARTMENT_RESOURCE_ACTIONS } from '@/views/pages/admin/department/acl/constants';
  import { RESOURCE_ACTIONS as MANAGER_RESOURCE_ACTIONS } from '@/views/pages/admin/manager/acl/constants';

  import { RESOURCE_ACTIONS as ROLE_RESOURCE_ACTIONS } from '@/views/pages/admin/role/acl/constants';
  import { RESOURCE_ACTIONS as PERMISSION_RESOURCE_ACTIONS } from '@/views/pages/admin/permission/acl/constants';
  import { RESOURCE_ACTIONS as SETTING_RESOURCE_ACTIONS } from '@/views/pages/admin/setting/acl/constants';

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
              label: 'Setting',
              route: {
                name: 'setting',
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
          meta: {
            // ...makeAnyPermission([
            //   // DASHBOARD_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   COUNTRY_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   CITY_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   LANGUAGE_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   ANNOUNCEMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   CONTEST_RESOURCE_ACTIONS.RESOURCE_INDEX,
            //   DOCUMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
            // ]),
          },
          items: [
            {
              label: 'dashboard',
              route: {
                name: 'dashboard',
              },
              // meta: {
              //   ...makePermission([
              //     DASHBOARD_RESOURCE_ACTIONS.RESOURCE_INDEX,
              //   ]),
              // },
            },
            {
              label: 'country',
              route: {
                name: 'countries',
              },
              meta: {
                ...makeAnyPermission([
                  COUNTRY_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  CITY_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'language',
              route: {
                name: 'languages',
              },
              meta: {
                ...makePermission([
                  LANGUAGE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'announcement',
              route: {
                name: 'announcements',
              },
              meta: {
                ...makePermission([
                  ANNOUNCEMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },

            {
              label: 'contest',
              route: {
                name: 'contests',
              },
              meta: {
                ...makePermission([
                  CONTEST_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'document',
              route: {
                name: 'documents',
              },
              meta: {
                ...makePermission([
                  DOCUMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
          ],
        },

        {
          label: 'Company',
          icon: 'building',
          class: '',
          meta: {
            ...makeAnyPermission([
              COMPANY_RESOURCE_ACTIONS.RESOURCE_INDEX,
              EMPLOYEE_RESOURCE_ACTIONS.RESOURCE_INDEX,
            ]),
          },
          items: [
            {
              label: 'company',
              route: {
                name: 'companies',
              },
              meta: {
                ...makePermission([
                  COMPANY_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'employee',
              route: {
                name: 'employees',
              },
              meta: {
                ...makePermission([
                  EMPLOYEE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
          ],
        },

        {
          label: 'University',
          icon: 'university',
          class: '',
          meta: {
            ...makeAnyPermission([
              ALIAS_RESOURCE_ACTIONS.RESOURCE_INDEX,
              DEGREE_RESOURCE_ACTIONS.RESOURCE_INDEX,
              UNIVERSITY_RESOURCE_ACTIONS.RESOURCE_INDEX,

              FACULTY_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX,
              FACULTY_RESOURCE_ACTIONS.RESOURCE_INDEX,

              DEPARTMENT_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX,
              DEPARTMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,

            ]),
          },
          items: [
            {
              label: 'alias',
              route: {
                name: 'aliases',
              },
              meta: {
                ...makePermission([
                  ALIAS_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'degree',
              route: {
                name: 'degrees',
              },
              meta: {
                ...makePermission([
                  DEGREE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },

            {
              label: 'university',
              route: {
                name: 'universities',
              },
              meta: {
                ...makePermission([
                  UNIVERSITY_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },

            {
              label: 'faculty',
              meta: {
                ...makeAnyPermission([
                  FACULTY_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  FACULTY_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
              submenu: [
                {
                  label: 'facultyName',
                  route: {
                    name: 'faculties-names',
                  },
                  meta: {
                    ...makePermission([
                      FACULTY_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX,
                    ]),
                  },
                },
                {
                  label: 'faculty',
                  route: {
                    name: 'faculties',
                  },
                  meta: {
                    ...makePermission([
                      FACULTY_RESOURCE_ACTIONS.RESOURCE_INDEX
                    ]),
                  },
                },
              ],
            },

            {
              label: 'department',
              meta: {
                ...makeAnyPermission([
                  DEPARTMENT_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  DEPARTMENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
              submenu: [
                {
                  label: 'departmentName',
                  route: {
                    name: 'departments-names',
                  },
                  meta: {
                    ...makePermission([
                      DEPARTMENT_NAME_RESOURCE_ACTIONS.RESOURCE_INDEX
                    ]),
                  },
                },
                {
                  label: 'department',
                  route: {
                    name: 'departments',
                  },
                  meta: {
                    ...makePermission([
                      DEPARTMENT_RESOURCE_ACTIONS.RESOURCE_INDEX
                    ]),
                  },
                },
              ],
            },
          ],
        },

        {
          label: 'Student',
          icon: 'users',
          class: '',
          meta: {
            ...makeAnyPermission([
              STUDENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
              APPLICATION_STATUS_VALUE_RESOURCE_ACTIONS.RESOURCE_INDEX,
            ]),
          },
          items: [
            {
              label: 'student',
              route: {
                name: 'students',
              },
              meta: {
                ...makePermission([
                  STUDENT_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            {
              label: 'applicationStatusValue',
              route: {
                name: 'application-statuses',
              },
              meta: {
                ...makePermission([
                  APPLICATION_STATUS_VALUE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
            },
            // {
            //   label: 'application',
            //   route: {
            //     name: 'applications',
            //   },
            // },
          ],
        },

        {
          label: 'Site',
          icon: 'puzzle-piece',
          class: '',
          meta: {
            ...makeAnyPermission([
              MANAGER_RESOURCE_ACTIONS.RESOURCE_INDEX,
              ROLE_RESOURCE_ACTIONS.RESOURCE_INDEX,
              PERMISSION_RESOURCE_ACTIONS.RESOURCE_INDEX,
              SETTING_RESOURCE_ACTIONS.RESOURCE_INDEX,
            ]),
          },
          items: [
            {
              label: 'manager',
              meta: {
                ...makeAnyPermission([
                  MANAGER_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  ROLE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  PERMISSION_RESOURCE_ACTIONS.RESOURCE_INDEX,
                ]),
              },
              submenu: [
                {
                  label: 'manager',
                  route: {
                    name: 'managers',
                  },
                  meta: {
                    ...makePermission([
                      MANAGER_RESOURCE_ACTIONS.RESOURCE_INDEX,
                    ]),
                  },
                },
                {
                  label: 'role',
                  route: {
                    name: 'roles',
                  },
                  meta: {
                    ...makePermission([
                      ROLE_RESOURCE_ACTIONS.RESOURCE_INDEX,
                    ]),
                  },
                },
                {
                  label: 'permission',
                  route: {
                    name: 'permissions',
                  },
                  meta: {
                    ...makePermission([
                      PERMISSION_RESOURCE_ACTIONS.RESOURCE_INDEX,
                    ]),
                  },
                },
              ],
            },
            {
              label: 'setting',
              route: {
                name: 'settings',
              },
              meta: {
                ...makeAnyPermission([
                  SETTING_RESOURCE_ACTIONS.RESOURCE_INDEX,
                  SETTING_RESOURCE_ACTIONS.RESOURCE_ABOUT_US,
                ]),
              },
            },
          ],
        },
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