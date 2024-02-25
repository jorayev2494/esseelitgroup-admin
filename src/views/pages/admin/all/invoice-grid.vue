<template>
  <div class="main-wrapper">
    <layout-headeradmin></layout-headeradmin>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Invoice Grid</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/admin/index">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Invoice Grid</li>
              </ul>
            </div>
            <div class="col-auto">
              <router-link to="/admin/invoices" class="invoices-links">
                <i data-feather="list"></i>
              </router-link>
              <router-link
                to="/admin/invoice-grid"
                class="invoices-links active"
              >
                <i data-feather="grid"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <!-- Report Filter -->
 <reportfilter></reportfilter>
        <!-- /Report Filter -->

        <div class="card invoices-tabs-card">
          <div class="card-body card-body pt-0 pb-0">
            <div class="invoices-main-tabs border-0 pb-0">
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                  <div class="invoices-settings-btn invoices-settings-btn-one">
                    <router-link
                      to="/admin/invoices-settings"
                      class="invoices-settings-icon"
                    >
                      <i data-feather="settings"></i>
                    </router-link>
                    <router-link to="/admin/add-invoice" class="btn">
                      <i data-feather="plus-circle"></i> New Invoice
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link to="/admin/view-invoice" class="invoice-grid-link"
                  >IN093439#@09</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-04.jpg"
                      alt="User Image"
                    />
                    Jonathan Doe</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$1,54,220</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">23 Mar, 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-success-dark">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@10</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-06.jpg"
                      alt="User Image"
                    />
                    Karlene Chaidez</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$1,222</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">18 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-danger-dark">Overdue</span>
                  </div>
                  <div class="col text-end">
                    <span class="text-danger text-sm">Overdue 14 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@11</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-08.jpg"
                      alt="User Image"
                    />
                    Russell Copeland</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$3,470</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">10 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-secondary-dark">Cancelled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@12</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-10.jpg"
                      alt="User Image"
                    />
                    Joseph Collins</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$8,265</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">30 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-primary-dark">Sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@13</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-11.jpg"
                      alt="User Image"
                    />
                    Jennifer Floyd</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$5,200</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">20 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-secondary-dark">Cancelled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@14</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-09.jpg"
                      alt="User Image"
                    />
                    Joan Gardner</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$480</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">15 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-primary-dark">Sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@15</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-12.jpg"
                      alt="User Image"
                    />
                    Alex Campbell</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$1,999</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">08 Mar 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-danger-dark">Overdue</span>
                  </div>
                  <div class="col text-end">
                    <span class="text-danger text-sm">Overdue 10 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 d-flex">
            <div class="card invoices-grid-card w-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <router-link
                  to="/admin/view-invoice"
                  class="invoice-grid-link"
                  >IN093439#@016</router-link
                >
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fas fa-ellipsis-v"></i
                  ></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <router-link class="dropdown-item" to="edit-invoice"
                      ><i class="far fa-edit me-2"></i>Edit</router-link
                    >
                    <router-link class="dropdown-item" to="view-invoice"
                      ><i class="far fa-eye me-2"></i>View</router-link
                    >
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="far fa-trash-alt me-2"></i>Delete</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-middle">
                <h2 class="card-middle-avatar">
                  <router-link to="/admin/profile"
                    ><img
                      class="avatar avatar-sm me-2 avatar-img rounded-circle"
                      src="@/assets/img/admin/profiles/avatar-03.jpg"
                      alt="User Image"
                    />
                    Marie Canales</router-link
                  >
                </h2>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <span><i class="far fa-money-bill-alt"></i> Amount</span>
                    <h6 class="mb-0">$2,700</h6>
                  </div>
                  <div class="col-auto">
                    <span><i class="far fa-calendar-alt"></i> Due Date</span>
                    <h6 class="mb-0">18 Mar, 2022</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="badge bg-success-dark">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="invoice-load-btn">
              <a href="#" class="btn">
                <span class="spinner-border text-primary"></span> Load more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
