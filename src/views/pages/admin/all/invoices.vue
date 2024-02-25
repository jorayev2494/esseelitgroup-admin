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
              <h3 class="page-title">Invoices</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/admin/index">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Invoices</li>
              </ul>
            </div>
            <div class="col-auto">
              <router-link to="/admin/invoices" class="invoices-links active">
                <i data-feather="list"></i>
              </router-link>
              <router-link to="/admin/invoice-grid" class="invoices-links">
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
            <div class="invoices-main-tabs">
              <div class="row align-items-center">
                <div class="col-lg-8 col-md-8">
                  <div class="invoices-tabs">
                    <ul>
                      <li>
                        <router-link to="/admin/invoices" class="active"
                          >All Invoice</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoices-paid"
                          >Paid</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoices-overdue"
                          >Overdue</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoices-draft"
                          >Draft</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoices-recurring"
                          >Recurring</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoices-cancelled"
                          >Cancelled</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="invoices-settings-btn">
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
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card inovices-card">
              <div class="card-body">
                <div class="inovices-widget-header">
                  <span class="inovices-widget-icon">
                    <img
                      src="@/assets/img/admin/icons/invoices-icon1.svg"
                      alt=""
                    />
                  </span>
                  <div class="inovices-dash-count">
                    <div class="inovices-amount">$8,78,797</div>
                  </div>
                </div>
                <p class="inovices-all">All Invoices <span>50</span></p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card inovices-card">
              <div class="card-body">
                <div class="inovices-widget-header">
                  <span class="inovices-widget-icon">
                    <img
                      src="@/assets/img/admin/icons/invoices-icon2.svg"
                      alt=""
                    />
                  </span>
                  <div class="inovices-dash-count">
                    <div class="inovices-amount">$4,5884</div>
                  </div>
                </div>
                <p class="inovices-all">Paid Invoices <span>60</span></p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card inovices-card">
              <div class="card-body">
                <div class="inovices-widget-header">
                  <span class="inovices-widget-icon">
                    <img
                      src="@/assets/img/admin/icons/invoices-icon3.svg"
                      alt=""
                    />
                  </span>
                  <div class="inovices-dash-count">
                    <div class="inovices-amount">$2,05,545</div>
                  </div>
                </div>
                <p class="inovices-all">Unpaid Invoices <span>70</span></p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card inovices-card">
              <div class="card-body">
                <div class="inovices-widget-header">
                  <span class="inovices-widget-icon">
                    <img
                      src="@/assets/img/admin/icons/invoices-icon4.svg"
                      alt=""
                    />
                  </span>
                  <div class="inovices-dash-count">
                    <div class="inovices-amount">$8,8,797</div>
                  </div>
                </div>
                <p class="inovices-all">Cancelled Invoices <span>80</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-stripped table-hover datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>Mentee ID</th>
                        <th>Category</th>
                        <th>Created on</th>
                        <th>Mentee to</th>
                        <th>Amount</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <router-link
                            to="/admin/view-invoice"
                            class="invoice-link"
                            >IN093439#@09</router-link
                          >
                        </td>
                        <td>PHP Developer</td>
                        <td>16 Mar 2022</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/admin/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="@/assets/img/admin/profiles/avatar-04.jpg"
                                alt="User Image"
                              />
                              Barbara Moore</router-link
                            >
                          </h2>
                        </td>
                        <td class="text-primary">$1,54,220</td>
                        <td>23 Mar 2022</td>
                        <td>
                          <span class="badge bg-success-light">Paid</span>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <router-link
                                class="dropdown-item"
                                to="/admin/edit-invoice"
                                ><i class="far fa-edit me-2"></i
                                >Edit</router-link
                              >
                              <router-link
                                class="dropdown-item"
                                to="/admin/view-invoice"
                                ><i class="far fa-eye me-2"></i
                                >View</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-trash-alt me-2"></i>Delete</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-check-circle me-2"></i>Mark as
                                sent</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-paper-plane me-2"></i>Send
                                Invoice</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-copy me-2"></i>Clone
                                Invoice</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <router-link
                            to="/admin/view-invoice"
                            class="invoice-link"
                            >IN093439#@10</router-link
                          >
                        </td>
                        <td>Ui Designer</td>
                        <td>14 Mar 2022</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/admin/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="@/assets/img/admin/profiles/avatar-06.jpg"
                                alt="User Image"
                              />
                              Karlene Chaidez</router-link
                            >
                          </h2>
                        </td>
                        <td class="text-primary">$1,222</td>
                        <td>18 Mar 2022</td>
                        <td>
                          <span class="badge bg-danger-light">Overdue</span>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <router-link
                                class="dropdown-item"
                                to="/admin/edit-invoice"
                                ><i class="far fa-edit me-2"></i
                                >Edit</router-link
                              >
                              <router-link
                                class="dropdown-item"
                                to="/admin/view-invoice"
                                ><i class="far fa-eye me-2"></i
                                >View</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-trash-alt me-2"></i>Delete</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-check-circle me-2"></i>Mark as
                                sent</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-paper-plane me-2"></i>Send
                                Invoice</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-copy me-2"></i>Clone
                                Invoice</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <router-link
                            to="/admin/view-invoice"
                            class="invoice-link"
                            >IN093439#@11</router-link
                          >
                        </td>
                        <td>Digital Marketer</td>
                        <td>7 Mar 2022</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/admin/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="@/assets/img/admin/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                              Russell Copeland</router-link
                            >
                          </h2>
                        </td>
                        <td class="text-primary">$3,470</td>
                        <td>10 Mar 2022</td>
                        <td>
                          <span class="badge bg-primary-light">Cancelled</span>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <router-link
                                class="dropdown-item"
                                to="/admin/edit-invoice"
                                ><i class="far fa-edit me-2"></i
                                >Edit</router-link
                              >
                              <router-link
                                class="dropdown-item"
                                to="/admin/view-invoice"
                                ><i class="far fa-eye me-2"></i
                                >View</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-trash-alt me-2"></i>Delete</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-check-circle me-2"></i>Mark as
                                sent</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-paper-plane me-2"></i>Send
                                Invoice</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-copy me-2"></i>Clone
                                Invoice</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <router-link
                            to="/admin/view-invoice"
                            class="invoice-link"
                            >IN093439#@12</router-link
                          >
                        </td>
                        <td>Project Manager</td>
                        <td>24 Mar 2022</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/admin/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="@/assets/img/admin/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                              Joseph Collins</router-link
                            >
                          </h2>
                        </td>
                        <td class="text-primary">$8,265</td>
                        <td>30 Mar 2022</td>
                        <td>
                          <span class="badge bg-success-light">Paid</span>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <router-link
                                class="dropdown-item"
                                to="/admin/edit-invoice"
                                ><i class="far fa-edit me-2"></i
                                >Edit</router-link
                              >
                              <router-link
                                class="dropdown-item"
                                to="/admin/view-invoice"
                                ><i class="far fa-eye me-2"></i
                                >View</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-trash-alt me-2"></i>Delete</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-check-circle me-2"></i>Mark as
                                sent</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-paper-plane me-2"></i>Send
                                Invoice</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-copy me-2"></i>Clone
                                Invoice</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <router-link
                            to="/admin/view-invoice"
                            class="invoice-link"
                            >IN093439#@13</router-link
                          >
                        </td>
                        <td>Web Developer</td>
                        <td>17 Mar 2022</td>
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/admin/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="@/assets/img/admin/profiles/avatar-11.jpg"
                                alt="User Image"
                              />
                              Jennifer Floyd</router-link
                            >
                          </h2>
                        </td>
                        <td class="text-primary">$5,200</td>
                        <td>20 Mar 2022</td>
                        <td>
                          <span class="badge bg-danger-light">Overdue</span>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-v"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <router-link
                                class="dropdown-item"
                                to="/admin/edit-invoice"
                                ><i class="far fa-edit me-2"></i
                                >Edit</router-link
                              >
                              <router-link
                                class="dropdown-item"
                                to="/admin/view-invoice"
                                ><i class="far fa-eye me-2"></i
                                >View</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-trash-alt me-2"></i>Delete</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-check-circle me-2"></i>Mark as
                                sent</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-paper-plane me-2"></i>Send
                                Invoice</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="far fa-copy me-2"></i>Clone
                                Invoice</a
                              >
                            </div>
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

